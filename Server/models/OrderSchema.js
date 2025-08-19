import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  // order details
  orderId: {
    type: String,
    required: true,
    unique: true,
  },
  orderedItems: [
    {
      productId: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: "pending",
  },
  // User details
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  // payment details
  paymentmethod: {
    type: String,
    required: true,
  },
  paymentId: {
    type: String,
  },
  // additional
  notes: {
    type: String,
  },
});

const Order = mongoose.model("orders", OrderSchema);
export default Order;
