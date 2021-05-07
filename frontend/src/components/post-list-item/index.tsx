import React from "react";
import { IPost } from "../../types";
import Post from "../post";
import PostImg from "../post-img";
import PostOptions from "../post-options";
import Row from "../row";

function PostListItem({ ...post }: IPost) {
  return (
    <Row>
      <div>
        <Post {...post} excerpt={60} />
        <PostOptions {...post} />
      </div>
      <PostImg {...post} />
    </Row>
  );
}

export default PostListItem;
