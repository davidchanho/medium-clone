import React from "react";
import { Card } from "react-bootstrap";
import { PostProps } from "../../types";
import { usePost } from "./usePost";

function PostImg({ post }: PostProps) {
  const { onGetPost } = usePost(post);

  return (
    <Card.Body className="pointer" onClick={onGetPost}>
      <Card.Img src={post.image} style={{ width: 200, height: 135 }} />
    </Card.Body>
  );
}

export default PostImg;
