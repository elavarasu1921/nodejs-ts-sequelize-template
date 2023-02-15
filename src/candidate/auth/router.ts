import express from "express";
import * as authController from "./controller";
import registerReqValidate from "./login.request-dto";
const router = express.Router();

router.get("/login", registerReqValidate, authController.handleLogin);
router.get("/logout", authController.handleLogout);

export { router as cndtAuthRouter };
