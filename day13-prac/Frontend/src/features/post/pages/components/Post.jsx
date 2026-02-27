import React from "react";

const Post = ({ post }) => {
  if (!post?.user) return null;

  const { user, imgUrl, caption } = post;

  return (
    <div className="post">
      <div className="post__header">
        <div className="user-info">
          <img src={user?.profile_image} alt="profile" />
          <span>{user?.username}</span>
        </div>
        <i className="ri-more-fill"></i>
      </div>

      <img className="post__image" src={imgUrl} alt="post" />

      <div className="post__actions">
        <i
          className={`${
            post.isLiked ? "ri-heart-fill liked" : "ri-heart-line"
          } action-icon`}
        ></i>
        <i className="ri-chat-3-line action-icon"></i>
        <i className="ri-send-plane-line action-icon"></i>
        <i className="ri-bookmark-line action-icon save-icon"></i>
      </div>

      <div className="post__caption">
        <strong>{user?.username}</strong> {caption}
      </div>
    </div>
  );
};

export default Post;
