import mongoose from "mongoose";

const { model, Schema } = mongoose;

const userSchema = new Schema({
  fullname: { type: String },
  username: { type: String, unique: true, required: true },
  accountBal: { type: Number, default: 0 },
  deposits: { type: [Number], default: [] },
  earnings: { type: [Number], default: [] },
  referral: { type: Number, default: 0 },
  email: { type: String, unique: true, required: true },
  password: String,
  date: { type: Date, default: Date.now() },
  token: String,
  isEmailVerified: { type: Boolean, default: false },
  Otp: { type: Number, default: 0 },
});

const User = model("user", userSchema);

export default User;
