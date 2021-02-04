import React from "react";
import { Card } from "react-bootstrap";
import placeholder from "../../asset/imgPlaceholder.png";
import { PostProps } from "../../types";
import { usePost } from "./usePost";

function PostImg({ post }: PostProps) {
  const { onGetPost } = usePost(post);

  const image = post.image;
  
  return (
    <Card.Img
      src={image ? image : placeholder}
      className="pointer w-25"
      onClick={onGetPost}
    />
  );
}

export default PostImg;
