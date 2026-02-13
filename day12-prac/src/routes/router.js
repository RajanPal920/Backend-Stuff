const express = require("express");
const jwt = require("jsonwebtoken");
const model = require("../models/user.model");
const authRouther = express.Router();
const crypto = require("crypto");

authRouther.post("/register", async (req, res) => {
  const { name, password, email } = req.body;

  const isUserExists = await model.findOne({ email });

  if (isUserExists) {
    return res.status(409).json({
      message: "user already exists",
    });
  }

  const hash = crypto.createHash("md5").update(password).digest("hex");

  const user = await model.create({ name, password: hash, email });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("jwt-token", token);

  res.status(201).json({
    message: "user register sucessfully",
    user,
    token,
  });
});

authRouther.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const userEmail = await model.findOne({ email });

  if (!userEmail) {
    return res.status(404).json({
      message: "user do not  exists with this email",
    });
  }

  const isPassMatch =
    userEmail.password ===
    crypto.createHash("md5").update(password).digest("hex");

  if (!isPassMatch) {
    return res.status(401).json({
      message: "user invalid",
    });
  }

  const token = jwt.sign({ id: userEmail._id }, process.env.JWT_SECRET);

  res.cookie("jwt-token", token);

  res.status(200).json({
    message: "user logged in",
    userEmail,
    token,
  });
});

module.exports = authRouther;
