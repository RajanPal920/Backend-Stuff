const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

async function userRegisterController(req, res) {
  const { username, email, password, bio, profile_image } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ email }, { username }],
  });

  if (isUserAlreadyExists) {
    return res.status(409).json({
      message:
        "user already exists" + isUserAlreadyExists.email === email
          ? "email already exists"
          : "username already exists",
    });
  }

  const hash = crypto.createHash("sha256").update(password).digest("hex");

  const user = await userModel.create({
    username,
    email,
    password: hash,
    bio,
    profile_image,
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token);

  res.status(201).json({
    message: "user register sucessfully",
    user: {
      email: user.email,
      username: user.username,
      bio: user.bio,
      profileImage: user.profile_image,
    },
    token,
  });
}

async function userLoginController(req, res) {
  const { username, password, email } = req.body;

  const isValideUser = await userModel.findOne({
    $or: [{ username: username }, { email: email }],
  });

  if (!isValideUser) {
    return res.status(404).json({
      message: "user not found",
    });
  }

  const hash = crypto.createHash("sha256").update(password).digest("hex");

  const isPasswordValide = hash == isValideUser.password;

  if (!isPasswordValide) {
    return res.status(401).json({
      message: "password invalid",
    });
  }

  const token = jwt.sign({ id: isValideUser._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token);

  res.status(200).json({
    message: "user loggedIn",
    isValideUser: {
      username: isValideUser.username,
      email: isValideUser.email,
      bio: isValideUser.bio,
      profileImage: isValideUser.profile_image,
    },
  });
}

module.exports = {
  userRegisterController,
  userLoginController,
};
