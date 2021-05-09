import React from "react";
import { Card, ImageProps } from "react-bootstrap";
import { useGetPost } from "../../hooks/useGetPost";
import { PostProps } from "../../types";

function PostImg({
  width = 200,
  height = 135,
  className,
  post,
}: PostProps & ImageProps) {
  const { onGetPost } = useGetPost(post);

  return (
    <Card.Img
      src={post?.image}
      className={`${className} pointer`}
      onClick={onGetPost}
      width={width}
      height={height}
    />
  );
}

export default PostImg;
