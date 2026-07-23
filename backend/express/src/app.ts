import cors from "cors";
import express from "express";
import helmet from "helmet";
import { errorHandler, notFoundHandler } from "./errors/middleware.js";
import { adminRouter, publicRouter, superAdminRouter } from "./routes/index.js";

export function createApp() {
  const app = express();

  app.use(helmet());
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN ?? "http://localhost:3000",
    }),
  );
  app.use(express.json());

  app.use("/api", publicRouter);
  app.use("/api/admin", adminRouter);
  app.use("/api/super-admin", superAdminRouter);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
