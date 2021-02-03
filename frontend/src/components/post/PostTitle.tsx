import React from "react";
import { Card } from "react-bootstrap";
import { PostProps } from "../../types";

function PostTitle({ post }: PostProps) {
  return <Card.Title className="text-capitalize">{post.title}</Card.Title>;
}

export default PostTitle;
