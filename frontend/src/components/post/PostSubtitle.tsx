import React from "react";
import Card from "react-bootstrap/esm/Card";
import { PostProps } from "../../types";

function PostSubtitle({ post }: PostProps) {
  return (
    <Card.Subtitle className="text-capitalize text-secondary">
      {post.body.substr(0, 50).trim()}...
    </Card.Subtitle>
  );
}

export default PostSubtitle;
