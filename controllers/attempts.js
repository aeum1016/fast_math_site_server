import Attempt from "../models/attempt.js";
import User from "../models/user.js";

export const getAttempts = async (req, res) => {
  try {
    const attempts = await Attempt.find();

    res.status(200).json(attempts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserAttempts = async (req, res) => {
  const { email } = req.params;

  try {
    const user = await User.find({ email });
    if (!user) return res.status(404).json({ message: "User doesn't exist." });

    const attempts = user[0].attempts;

    res.status(200).json(attempts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createAttempt = async (req, res) => {
  const attempt = req.body;

  const newAttempt = new Attempt({
    ...attempt,
    createdAt: new Date().toISOString(),
  });

  try {
    await newAttempt.save();

    const user = await User.findOne({ email: newAttempt.email });
    if (!user) return res.status(404).json({ message: "User doesn't exist." });
    user.attempts.push(newAttempt);

    const updatedUser = await User.findOneAndUpdate(
      { email: newAttempt.email },
      user,
      {
        new: true,
      }
    );

    res.status(201).json(updatedUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
