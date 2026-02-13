const express = require("express");
const authRouter = express.Router();
const userController = require("../controller/user.controller");


authRouter.post("/register", userController.userRegisterController);

authRouter.post("/login", userController.userLoginController);

module.exports = authRouter;
