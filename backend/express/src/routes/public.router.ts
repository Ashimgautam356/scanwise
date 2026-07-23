import { Router } from "express";
import * as categoryController from "../controllers/category.controller.js";
import * as productController from "../controllers/product.controller.js";
import * as userController from "../controllers/user.controller.js";
import { validate } from "../middleware/validate.js";
import { categoryIdSchema } from "../schemas/category.schema.js";
import { productIdSchema } from "../schemas/product.schema.js";
import { updateUserSchema, userIdSchema } from "../schemas/user.schema.js";

export const publicRouter = Router();

publicRouter.get("/products", productController.listProducts);
publicRouter.get(
  "/products/:id",
  validate({ params: productIdSchema }),
  productController.getProduct,
);
publicRouter.get("/categories", categoryController.listCategories);
publicRouter.get(
  "/categories/:id/products",
  validate({ params: categoryIdSchema }),
  productController.listProductsByCategory,
);
publicRouter.patch(
  "/users/:id",
  validate({ params: userIdSchema, body: updateUserSchema }),
  userController.updateUser,
);
