import express from "express";
import {
  createUser,
  userLogin,
  verifyOtp,
  verifyEmail,
  resetPasswordVerifyOtp,
  resetPassword,
} from "../controllers/UserController.js";

const userRouter = express.Router();

userRouter.post("/create-user", createUser);
userRouter.post("/login", userLogin);
userRouter.post("/verify-otp", verifyOtp);
userRouter.post("/reset-password/verify-email", verifyEmail);
userRouter.post("/reset-password/verify-otp", resetPasswordVerifyOtp);
userRouter.post("/reset-password", resetPassword);

export default userRouter;
