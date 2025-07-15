import express from "express";
import { createUser, userLogin } from "../controllers/UserController.js";

const userRouter = express.Router();

userRouter.post("/create-user", createUser);
userRouter.post("/login", userLogin);

export default userRouter;
