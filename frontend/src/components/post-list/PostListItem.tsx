import React from "react";
import { IPost } from "../../types";
import Post from "../post";
import PostOptions from "../post-options";
import PostImg from "../post/PostImg";

function PostListItem({ ...post }: IPost) {
  return (
    <div>
      <div>
        <Post {...post} excerpt={60} />
        <PostOptions {...post} />
      </div>
      <div>
        <PostImg {...post} />
      </div>
    </div>
  );
}

export default PostListItem;
