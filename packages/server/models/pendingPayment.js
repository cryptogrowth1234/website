import mongoose from "mongoose";

const { model, Schema } = mongoose;

const pendingPaymentSchema = new Schema({
  userId: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  payername: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: Date, default: new Date() },
});

const pendingPayment = model("pendingPayment", pendingPaymentSchema);

export default pendingPayment;
