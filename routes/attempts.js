import express from "express";
const router = express.Router();

import {
  getAttempts,
  getUserAttempts,
  createAttempt,
} from "../controllers/attempts.js";

router.get("/", getAttempts);
router.get("/:email", getUserAttempts);
router.post("/", createAttempt);

export default router;
