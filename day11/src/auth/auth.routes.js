const express = require("express");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const isUserExists = await userModel.findOne({ email });

  if (isUserExists) {
    return res.status(409).json({
      message: "user already exists with this address",
    });
  }

  const user = await userModel.create({
    name,
    email,
    password,
  });

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_URL,
  );

  res.cookie("jwt_cookie", token);

  res.status(201).json({
    message: "User Register..",
    user,
    token,
  });
});

module.exports = authRouter;
