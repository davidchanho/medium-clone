import React from "react";
import { Card, ImageProps } from "react-bootstrap";
import { useGetPost } from "../../hooks/useGetPost";
import { IPost } from "../../types";

function PostImg({
  width = 200,
  height = 135,
  className,
  ...post
}: IPost & ImageProps) {
  const { onGetPost } = useGetPost(post);

  const image = post.image;

  return (
    <Card.Img
      src={image ? image : "/imgPlaceholder.png"}
      className={`${className} pointer`}
      onClick={onGetPost}
      width={width}
      height={height}
    />
  );
}

export default PostImg;
