import { Router } from "express";
import * as categoryController from "../controllers/category.controller.js";
import * as productController from "../controllers/product.controller.js";
import * as userController from "../controllers/user.controller.js";
import { validate } from "../middleware/validate.js";
import {
  categoryIdSchema,
  createCategorySchema,
  updateCategorySchema,
} from "../schemas/category.schema.js";
import {
  createProductSchema,
  productIdSchema,
  updateProductSchema,
} from "../schemas/product.schema.js";
import { createUserSchema, updateUserSchema, userIdSchema } from "../schemas/user.schema.js";

export const adminRouter = Router();

adminRouter.get("/products", productController.listProducts);
adminRouter.post(
  "/products",
  validate({ body: createProductSchema }),
  productController.createProduct,
);
adminRouter.get(
  "/products/:id",
  validate({ params: productIdSchema }),
  productController.getProduct,
);
adminRouter.patch(
  "/products/:id",
  validate({ params: productIdSchema, body: updateProductSchema }),
  productController.updateProduct,
);
adminRouter.delete(
  "/products/:id",
  validate({ params: productIdSchema }),
  productController.deleteProduct,
);

adminRouter.get("/users", userController.listUsers);
adminRouter.post("/users", validate({ body: createUserSchema }), userController.createUser);
adminRouter.get("/users/:id", validate({ params: userIdSchema }), userController.getUser);
adminRouter.patch(
  "/users/:id",
  validate({ params: userIdSchema, body: updateUserSchema }),
  userController.updateUser,
);
adminRouter.delete("/users/:id", validate({ params: userIdSchema }), userController.deleteUser);

adminRouter.get("/categories", categoryController.listCategories);
adminRouter.post(
  "/categories",
  validate({ body: createCategorySchema }),
  categoryController.createCategory,
);
adminRouter.get(
  "/categories/:id",
  validate({ params: categoryIdSchema }),
  categoryController.getCategory,
);
adminRouter.patch(
  "/categories/:id",
  validate({ params: categoryIdSchema, body: updateCategorySchema }),
  categoryController.updateCategory,
);
adminRouter.delete(
  "/categories/:id",
  validate({ params: categoryIdSchema }),
  categoryController.deleteCategory,
);
