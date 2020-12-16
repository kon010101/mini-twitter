import React, { useState, useEffect } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import axios from "axios";

function Feed() {
  const [posts, setPosts] = useState([
    { displayName: "KK", userName: "kon", text: "hellloo you guys!!" },
  ]);

  //   useEffect(() => {
  //     axios
  //       .get(
  //         `url/users${userId}/`
  //       )
  //       .then((res) => {
  //         if (startIndex >= res.data.totalItems || startIndex < 0) {
  //           alert(
  //             `startIndex must be between 1 and ${res.data.totalItems} and is ${startIndex}`
  //           );
  //         } else {
  //           if (res.data.items.length > 0) {
  //             if (add) {
  //               setCards([...cards, ...res.data.items]);
  //             } else {
  //               setCards(res.data.items);
  //             }
  //             setLoading(false);
  //             //console.log(cards);
  //           }
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);

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
