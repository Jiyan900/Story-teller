import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, log } from "./vite";
import cors from "cors";
import compression from "compression";

const app = express();

// Basic middleware
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add health check endpoint
app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// Request logging
app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (req.path.startsWith("/api")) {
      log(`${req.method} ${req.path} ${res.statusCode} ${duration}ms`);
    }
  });
  next();
});


// Error handling
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({ message: err.message || "Internal Server Error" });
});

// Start server
(async () => {
  try {
    log('Starting server...');
    const server = await registerRoutes(app);

    // In development, always use Vite's dev server
    await setupVite(app, server);

    const port = 5000;
    const host = "0.0.0.0";

    server.listen(port, host, () => {
      log(`✨ Server running at http://${host}:${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
})();

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
});