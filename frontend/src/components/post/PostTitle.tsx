import React from "react";
import { Card } from "react-bootstrap";
import { PostProps } from "../../store/posts/types";

function PostTitle({ post, className }: PostProps) {
  if (!post) {
    return null;
  }

  return (
    <Card.Title className={`text-capitalize mb-1 ${className}`}>
      {post.title}
    </Card.Title>
  );
}

export default PostTitle;
