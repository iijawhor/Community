import React from "react";
import "./Posts.css";
import PostCard from "../PostCard/PostCard";
import { userPosts } from "../../Constants/Constants";
const Posts = () => {
  return (
    <section className="posts">
      {userPosts.map(
        ({ name, bio, postClub, postText, postTitle, postImage, id }) => (
          <PostCard
            name={name}
            postClub={postClub}
            postText={postText}
            postTitle={postTitle}
            postImage={postImage}
            bio={bio}
            key={id}
          />
        )
      )}
    </section>
  );
};

export default Posts;
