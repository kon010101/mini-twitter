import React, { useState, useEffect } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";

function Feed() {
  const [posts, setPosts] = useState([
    { displayName: "KK", userName: "kon", text: "hellloo you guys!!" },
  ]);

  useEffect(() => {
    //fetch data here
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>FEED</h2>
      </div>
      <TweetBox />
      {posts.map((post) => {
        return (
          <Post
            displayName={post.displayName}
            userName={post.userName}
            text={post.text}
          />
        );
      })}
    </div>
  );
}

export default Feed;
