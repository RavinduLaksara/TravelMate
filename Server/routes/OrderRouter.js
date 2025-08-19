import express from "express";
import { createOrder } from "../controllers/OrderController.js";
import authenticateToken from "../middleware/authMiddleware.js";

const orderRouter = express.Router();
orderRouter.post("/", authenticateToken, createOrder);

export default orderRouter;
