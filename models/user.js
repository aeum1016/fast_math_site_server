import mongoose from "mongoose";
import Attempt from "./attempt.js";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  attempts: { type: [Attempt.type], default: [] },
});

export default mongoose.model("User", userSchema);
