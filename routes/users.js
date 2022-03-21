import express from "express";
const router = express.Router();

import { getuser, signin, signup } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/:email", getuser);

export default router;
