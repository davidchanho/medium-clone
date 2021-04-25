import React from "react";
import { Card } from "react-bootstrap";
import { IPost } from "../../types";

function PostTitle({ ...post }: IPost) {
  return <Card.Title className="text-capitalize mb-1">{post.title}</Card.Title>;
}

export default PostTitle;
