import React from "react";
import { Card } from "react-bootstrap";
import { PostProps } from "../../types";
import PostDate from "../post/PostDate";
import PostHeader from "../post/PostHeader";
import PostImg from "../post/PostImg";
import PostOptions from "../post/PostOptions";
import PostSubtitle from "../post/PostSubtitle";
import PostTitle from "../post/PostTitle";
import { usePost } from "../post/usePost";

function PostListItem({ post }: PostProps) {
  const { onGetPost } = usePost(post);

  return (
    <Card className="d-flex flex-row align-items-center mb-2 w-100">
      <Card.Header className="bg-white d-flex justify-content-between pointer">
        <div className="pointer" onClick={onGetPost}>
          <PostHeader post={post} />
          <PostTitle post={post} />
          <PostSubtitle post={post} />
          <PostDate post={post} />
        </div>
        <PostOptions post={post} />
      </Card.Header>
      <Card.Body>
        <PostImg post={post} />
      </Card.Body>
    </Card>
  );
}

export default PostListItem;
