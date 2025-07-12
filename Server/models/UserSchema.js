import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "customer",
  },
  isBlock: {
    type: Boolean,
    default: false,
  },
  avator: {
    type: String,
    default: "https://cdn-icons-png.flaticon.com/512/3607/3607444.png",
  },
  otp: {
    type: Number,
  },
  address: {
    type: String,
  },
});

const User = mongoose.model("users", userSchema);
export default User;
