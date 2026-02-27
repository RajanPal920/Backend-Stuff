const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "username already exists"],
    required: [true, "username is required"],
  },
  email: {
    type: String,
    unique: [true, "email already exists"],
    required: [true, "email is required"],
  },
  password: {
    type: String,
    password: [true, "password is required"],
    select: false,
  },
  bio: String,
  profile_image: {
    type: String,
    default:
      "https://ik.imagekit.io/vgvdtyor3/default-avatar-profile-social-media-260nw-1920331226.jpg?updatedAt=1770787392601",
  },
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
