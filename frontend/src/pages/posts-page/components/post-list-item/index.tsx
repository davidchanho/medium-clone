import React from "react";
import PostOptions from "../../../../components/post-options";
import Row from "../../../../components/row";
import { IPost } from "../../../../types";
import Post from "../post";
import PostImg from "../post/PostImg";

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
