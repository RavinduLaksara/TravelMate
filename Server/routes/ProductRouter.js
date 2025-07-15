import express from "express";
import {
  createProduct,
  getAllProducts,
} from "../controllers/ProductController.js";
import authenticateToken from "../middleware/authMiddleware.js";

const productRouter = express.Router();
productRouter.post("/create-product", authenticateToken, createProduct);
productRouter.get("/get-all", getAllProducts);

export default productRouter;
