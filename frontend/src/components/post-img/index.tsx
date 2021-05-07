import React, { ImgHTMLAttributes } from "react";
import { useGetPost } from "../../hooks/useGetPost";
import { IPost } from "../../types";


function PostImg({
  width = 200,
  height = 135,
  className,
  ...post
}: IPost & ImgHTMLAttributes<HTMLImageElement>) {
  const { onGetPost } = useGetPost(post);

  return (
    <img
      src={post.image}
      alt=""
      className={className}
      onClick={onGetPost}
      width={width}
      height={height}
    />
  );
}

export default PostImg;
