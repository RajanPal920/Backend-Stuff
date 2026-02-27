import React, { useEffect } from "react";
import "../style/feed.scss";
import Post from "./components/Post";
import { usePost } from "../hooks/usePost";

const Feed = () => {
  const { feed, handleGetFeed, loading } = usePost();

  useEffect(() => {
    handleGetFeed();
  }, []);

  if (loading) {
    return <div className="feed">Loading...</div>;
  }

  return (
    <div className="feed">
      {feed?.map((item) => {
        console.log(item);
        return <Post key={item._id} post={item} />;
      })}
    </div>
  );
};

export default Feed;
