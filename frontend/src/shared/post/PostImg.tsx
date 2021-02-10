import React from "react";
import { Card, ImageProps } from "react-bootstrap";
import placeholder from "../../asset/imgPlaceholder.png";
import { PostProps } from "../../store/posts/types";
import { usePost } from "./usePost";

function PostImg({
  post,
  width = 200,
  height = 135,
  className,
}: PostProps & ImageProps) {
  const { onGetPost } = usePost(post);

  const image = post.image;

  return (
    <Card.Img
      src={image ? image : placeholder}
      className={`${className} pointer`}
      onClick={onGetPost}
      width={width}
      height={height}
    />
  );
}

export default PostImg;
