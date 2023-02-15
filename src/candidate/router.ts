import express from "express";
import { cndtAuthRouter } from "./auth/router";
const router = express.Router();

router.use("/auth", cndtAuthRouter);

export { router as candidateRouter };
