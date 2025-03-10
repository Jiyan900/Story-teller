import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import cors from "cors";
import compression from "compression";

const app = express();

// Enable CORS for development
app.use(cors());
app.use(compression()); // Add compression middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add health check endpoint
app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// Request logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      log(logLine);
    }
  });

  next();
});

// Error handling middleware
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Error:', err);
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
});

(async () => {
  try {
    log('Starting server initialization...');
    const server = await registerRoutes(app);

    if (app.get("env") === "development") {
      log('Setting up Vite development server...');
      await setupVite(app, server).catch(error => {
        log('Vite setup warning (continuing anyway):', error);
      });
    } else {
      log('Setting up static file serving...');
      serveStatic(app);
    }

    // ALWAYS serve the app on port 5000 and bind to 0.0.0.0
    const port = 5000;
    const host = "0.0.0.0";

    await new Promise<void>((resolve, reject) => {
      try {
        log('Attempting to start server...');
        server.listen({
          port,
          host,
          reusePort: true,
        }, () => {
          log(`✨ Server running at http://${host}:${port}`);
          resolve();
        }).on('error', (error) => {
          log(`❌ Server startup error: ${error.message}`);
          reject(error);
        });
      } catch (error) {
        log(`❌ Failed to start server: ${error}`);
        reject(error);
      }
    });

    // Handle server errors
    server.on('error', (error: NodeJS.ErrnoException) => {
      if (error.syscall !== 'listen') {
        throw error;
      }

      switch (error.code) {
        case 'EACCES':
          console.error(`Port ${port} requires elevated privileges`);
          process.exit(1);
          break;
        case 'EADDRINUSE':
          console.error(`Port ${port} is already in use`);
          process.exit(1);
          break;
        default:
          throw error;
      }
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
})();