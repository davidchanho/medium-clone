import React from "react";
import { IPost } from "../../../../types";
import Post from "../post";
import PostImg from "../post/PostImg";

function FeaturedPost({ ...post }: IPost) {
  return (
    <div>
      <Post {...post} />

      <PostImg {...post} height={100} width={100} />
    </div>
  );
}

export default FeaturedPost;
