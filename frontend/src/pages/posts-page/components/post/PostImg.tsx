import React, { ImgHTMLAttributes } from "react";
import { useGetPost } from "../../../../hooks/useGetPost";
import { IPost } from "../../../../types";

function PostImg({
  width = 200,
  height = 135,
  className,
  ...post
}: IPost & ImgHTMLAttributes<HTMLImageElement>) {
  const { onGetPost } = useGetPost(post);

  const image = post.image;

  return (
    <img
      src={image ? image : "/imgPlaceholder.png"}
      className={className}
      onClick={onGetPost}
      width={width}
      height={height}
    />
  );
}

export default PostImg;
