import mongoose from "mongoose";

const attemptSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  operation: { type: String, required: true },
  max: { type: Number, required: true },
  type: { type: String, required: true },
  time: { type: Number, required: true },
  completed: { type: Number, required: true, default: 0 },
  incorrect: { type: Number, required: true, default: 0 },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("Attempt", attemptSchema);
