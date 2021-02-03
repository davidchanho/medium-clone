import React from "react";
import { PostProps } from "../../types";
import PostDate from "./PostDate";
import PostHeader from "./PostHeader";
import PostTitle from "./PostTitle";
import { usePost } from "./usePost";

function SidePost({ post }: PostProps) {
  const { onGetPost } = usePost(post);

  return (
    <div className="pointer" onClick={onGetPost}>
      <PostHeader post={post} />
      <PostTitle post={post} />
      <PostDate post={post} />
    </div>
  );
}

export default SidePost;
