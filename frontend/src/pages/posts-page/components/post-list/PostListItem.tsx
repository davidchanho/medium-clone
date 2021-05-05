import React from "react";
import PostOptions from "../../../../components/post-options";
import { IPost } from "../../../../types";
import Post from "../post";
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
