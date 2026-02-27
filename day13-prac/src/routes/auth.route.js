const express = require("express");
const authRouter = express.Router();
const userController = require("../controller/user.controller");
const identifyUser = require("../middleware/auth.middleware");

authRouter.post("/register", userController.userRegisterController);

authRouter.post("/login", userController.userLoginController);

authRouter.get("/get-me", identifyUser, userController.getMeController);

module.exports = authRouter;
