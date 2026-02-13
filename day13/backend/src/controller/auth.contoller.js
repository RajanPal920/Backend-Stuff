const jwt = require("jsonwebtoken");
const authModel = require("../models/auth.models");
const bycrpt = require("bcryptjs");

async function registerController(req, res) {
  const { username, email, password, bio, profile_img } = req.body;

  const isUserExists = await authModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserExists) {
    return res.status(409).json({
      message:
        "User already exists " +
        (isUserExists.email === email
          ? "Email already exists"
          : "Username already exists"),
    });
  }

  const hash = await bycrpt.hash(password, 10);
  const user = authModel.create({
    username,
    email,
    password: hash,
    bio,
    profile_img,
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token);

  res.status(201).json({
    message: "user register sucessfully",
    user: {
      email: (await user).email,
      username: (await user).username,
      bio: (await user).bio,
      profile_img: (await user).profile_img,
    },
  });
}

async function loginController(req, res) {
  const { username, password, email } = req.body;

  const user = await authModel.findOne({
    $or: [
      {
        username: username,
      },
      { email: email },
    ],
  });

  if (!user) {
    return res.status(404).json({
      message: "user not found",
    });
  }

  const isPasswordValid = await bycrpt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "password invalid",
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token);

  res.status(200).json({
    message: "user loggedIn sucessfully",
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profile_img: user.profile_img,
    },
  });
}

module.exports = {
  registerController,
  loginController,
};
