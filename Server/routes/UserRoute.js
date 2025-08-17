import express from "express";
import {
  createUser,
  userLogin,
  verifyOtp,
  verifyEmail,
  resetPasswordVerifyOtp,
  resetPassword,
} from "../controllers/UserController.js";
import authenticateToken from "../middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.post("/create-user", createUser);
userRouter.post("/login", userLogin);
userRouter.post("/verify-otp", authenticateToken, verifyOtp);
userRouter.post("/reset-password/verify-email", verifyEmail);
userRouter.post(
  "/reset-password/verify-otp",
  authenticateToken,
  resetPasswordVerifyOtp
);
userRouter.post("/reset-password", authenticateToken, resetPassword);

export default userRouter;
