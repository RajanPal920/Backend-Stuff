const express = require("express");
const followController = require("../controller/follow.controller");
const identifyUser = require("../middleware/auth.middleware");

const userRouter = express.Router();

userRouter.post(
  "/follow/:username",
  identifyUser,
  followController.followUserController,
);

userRouter.post(
  "/unfollow/:username",
  identifyUser,
  followController.unfollowUserController,
);

userRouter.put(
  "/accept/:username",
  identifyUser,
  followController.acceptFollowRequestController,
);

module.exports = userRouter;
