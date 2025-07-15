import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotnev from "dotenv";
const PORT = process.env.PORT || 3000;
import userRouter from "./routes/UserRoute.js";
import productRouter from "./routes/ProductRouter.js";

dotnev.config();
const app = express();
app.use(bodyParser.json());

// Database connect
mongoose
  .connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, () => {
  console.log(`Server up & running port ${PORT}`);
});

// Routes
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
