import React from "react";
import { Card } from "react-bootstrap";
import { PostProps } from "../../types";
import { usePost } from "./usePost";

function PostImg({ post }: PostProps) {
  const { onGetPost } = usePost(post);
  
  return (
    <Card.Body className="pointer w-25" onClick={onGetPost}>
      <Card.Img className="w-100" src={post.image} />
    </Card.Body>
  );
}

export default PostImg;
