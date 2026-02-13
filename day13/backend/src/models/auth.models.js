const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "Username already exists"],
    required: [true, "username is required"],
  },
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  bio: String,
  profile_img: {
    type: String,
    default:
      "https://ik.imagekit.io/vgvdtyor3/default-avatar-profile-social-media-260nw-1920331226.jpg",
  },
});

const authModel = mongoose.model("users", authSchema);

module.exports = authModel;
