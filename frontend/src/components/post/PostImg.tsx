import React from "react";
import { Card, ImageProps } from "react-bootstrap";
import { PostProps } from "../../types";

function PostImg({
  width = 200,
  height = 135,
  className,
  post,
}: PostProps & ImageProps) {

  return (
    <Card.Img
      src={post?.image}
      className={`${className} pointer`}
      width={width}
      height={height}
    />
  );
}

export default PostImg;
