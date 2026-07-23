import { Router } from "express";
import * as userController from "../controllers/user.controller.js";
import { validate } from "../middleware/validate.js";
import { userIdSchema } from "../schemas/user.schema.js";

export const superAdminRouter = Router();

superAdminRouter.delete(
  "/admins/:id",
  validate({ params: userIdSchema }),
  userController.deleteAdmin,
);
