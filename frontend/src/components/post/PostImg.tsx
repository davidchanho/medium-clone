import React from "react";
import { Card, ImageProps } from "react-bootstrap";
import placeholder from "../../asset/imgPlaceholder.png";
import { useGetPost } from "../../hooks/useGetPost";
import { PostProps } from "../../store/posts/types";

function PostImg({
  post,
  width = 200,
  height = 135,
  className,
}: PostProps & ImageProps) {
  const { onGetPost } = useGetPost(post);

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
