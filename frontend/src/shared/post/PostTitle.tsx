import React from "react";
import { Card } from "react-bootstrap";
import { PostProps } from "../../types";

function PostTitle({ post, className }: PostProps) {
  return (
    <Card.Title className={`text-capitalize mb-1 ${className}`}>
      {post.title}
    </Card.Title>
  );
}

export default PostTitle;
