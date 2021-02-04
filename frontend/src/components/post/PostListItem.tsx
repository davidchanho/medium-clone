import React from "react";
import { Card } from "react-bootstrap";
import { PostProps } from "../../types";
import PostDate from "./PostDate";
import PostHeader from "./PostHeader";
import PostImg from "./PostImg";
import PostOptions from "./PostOptions";
import PostSubtitle from "./PostSubtitle";
import PostTitle from "./PostTitle";
import { usePost } from "./usePost";

function PostListItem({ post }: PostProps) {
  const { onGetPost } = usePost(post);

  return (
    <Card className="d-flex flex-row align-items-center">
      <Card.Header className="bg-white d-flex justify-content-between p-0 pointer">
        <div className="pointer" onClick={onGetPost}>
          <PostHeader post={post} />
          <PostTitle post={post} />
          <PostSubtitle post={post} />
          <PostDate post={post} />
        </div>
        <PostOptions post={post} />
      </Card.Header>
      <PostImg post={post} />
    </Card>
  );
}

export default PostListItem;
