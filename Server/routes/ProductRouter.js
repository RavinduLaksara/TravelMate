import express from "express";
import {
  createProduct,
  getAllProducts,
} from "../controllers/ProductController.js";
import authenticateToken from "../middleware/authMiddleware.js";

const productRouter = express.Router();
productRouter.post("/", authenticateToken, createProduct);
productRouter.get("/", getAllProducts);

export default productRouter;
