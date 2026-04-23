import mongoose, { Schema } from "mongoose";
import { roles } from "../../constant.js";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: 3,
      maxlength: 50,
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 5,
      maxlength: 12,
      select: false,
    },
    role: {
      type: String,
      enum: {
        values: roles,
        message: "Role is not match with the given database for access",
      },
      default: "customer",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationtoken: {
      type: String,
      select: false,
    },
    refreshtoken: {
      type: String,
      select: false,
    },
    resetPasswordtoken: {
      type: String,
      select: false,
    },
    resetPasswordExpire: {
      type: Date,
      select: false,
    },
  },
  { timestamps: true },
);

export const User = mongoose.model("User", UserSchema);
