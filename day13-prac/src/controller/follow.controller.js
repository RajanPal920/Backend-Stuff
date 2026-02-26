const followModel = require("../models/follow.model");
const userModel = require("../models/user.model");

async function followUserController(req, res) {
  const username = req.user.username;
  const followUsername = req.params.username;


  if(username === followUsername) {
    return res.status(400).json({
      message: "You cannot follow yourself",
    });
  }

  const followRecord = await followModel.create({
    follower: username,
    followee: followUsername,
  });

  const isAlreadyFollowing = await followModel.findOne({
    follower: username,
    followee: followUsername,
  });


  const isFolloweeExists = await userModel.findOne({
    followee: followUsername,
  });

  if(!isFolloweeExists){
    return res.status(404).json({
      message: `User ${followUsername} does not exist`,
    });
  }

 if(isAlreadyFollowing){
    return res.status(400).json({
      message: `You are already following ${followUsername}`,
      follow: isAlreadyFollowing,
    });
 }

  res.status(201).json({
    message: `You are now following ${followUsername}`,
    follow: followRecord,
  });
}

async function unfollowUserController(req, res) {
  const username = req.user.username;
  const unfollowUsername = req.params.username; 
  
  const isUserFollowing = await followModel.findOne({
    follower: username,
    followee: unfollowUsername,
  });

  if(!isUserFollowing){
    return res.status(400).json({
      message: `You are not following ${unfollowUsername}`,
    });
  }

  await followModel.findByIdAndDelete(isUserFollowing._id);

  res.status(200).json({
    message: `You have unfollowed ${unfollowUsername}`,
  });
  
}

module.exports = { followUserController  , unfollowUserController };
