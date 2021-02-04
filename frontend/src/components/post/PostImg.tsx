import React from "react";
import { Card } from "react-bootstrap";
import { PostProps } from "../../types";
import { usePost } from "./usePost";

function PostImg({ post }: PostProps) {
  const { onGetPost } = usePost(post);

  return (
    <Card.Img
      src={post.image}
      width={200}
      height={135}
      className="pointer w-25"
      onClick={onGetPost}
    />
  );
}

export default PostImg;
