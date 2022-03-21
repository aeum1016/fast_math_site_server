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
    var userAttempts = [];
    const attempts = await Attempt.find();
    userAttempts = attempts.filter((a) => a.email === email);

    if (!userAttempts.length) {
      return res
        .status(404)
        .json({ message: "User doesn't exist or has no attempts." });
    }

    res.status(200).json(userAttempts);
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

    res.status(201).json(newAttempt);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
