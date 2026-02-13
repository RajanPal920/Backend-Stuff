const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  caption: {
    type: String,
    default: "",
  },
  imgUrl: {
    type: String,
    required: [true, "img_url is required for creating post"],
  },
  user: {
    ref: "users",
    type: mongoose.Schema.Types.ObjectId,
    require: [true, "user id id required for creating post"],
  },
});

const postModel = mongoose.model("post", postSchema);

module.exports = postModel;
