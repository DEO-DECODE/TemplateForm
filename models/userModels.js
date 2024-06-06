import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
    minLength: [3, " Name must contain at least 3 characters"],
    maxLength: [30, " Name must not contain more than 30 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
  },
  country: {
    type: String,
  },
  attachment: {
    attachmentName: {
      type: String,
    },
    attachmentUrl: {
      type: String,
    },
  },
});

export const User= new mongoose.model("User", userSchema);