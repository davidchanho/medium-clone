import React from "react";
import { Card } from "react-bootstrap";
import { PostProps } from "../../types";
import Post from "../post";
import PostOptions from "../post-options";
import PostImg from "../post/PostImg";

function PostListItem({ post }: PostProps) {
  return (
    <Card className="d-flex flex-row mb-1 w-100">
      <Card.Header className="bg-white d-flex justify-content-between pointer w-75">
        <Post post={post && { ...post, excerpt: 60 }} />
        <PostOptions post={post} />
      </Card.Header>
      <Card.Body className="w-25">
        <PostImg post={post} />
      </Card.Body>
    </Card>
  );
}

export default PostListItem;
