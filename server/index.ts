import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import cors from "cors";
import compression from "compression";
import rateLimit from 'express-rate-limit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES Modules replacement for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Trust proxy - required for rate limiting behind reverse proxies
app.set('trust proxy', 1);

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

// Apply rate limiting to all routes
app.use(limiter);

// Enable CORS with proper error handling
app.use(cors({
  origin: process.env.NODE_ENV === 'production' ? ['https://*.replit.app'] : true,
  methods: ['GET', 'POST'],
  credentials: true,
}));

// Add compression middleware
app.use(compression()); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add health check endpoint
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
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

    if (process.env.NODE_ENV === "development") {
      log('Setting up Vite development server...');
      await setupVite(app, server).catch(error => {
        log('Vite setup warning (continuing anyway):', error);
      });
    } else {
      log('Setting up static file serving...');
      const buildDir = path.join(__dirname, '..', 'client', 'dist');
      fs.mkdirSync(buildDir, { recursive: true }); // Create build directory if it doesn't exist
      app.use(express.static(buildDir));

      // Serve index.html for all routes (SPA fallback)
      app.get('*', (_req, res) => {
        res.sendFile(path.join(buildDir, 'index.html'));
      });
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