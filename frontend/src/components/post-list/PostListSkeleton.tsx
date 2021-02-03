import React from "react";
import PostSkeleton from "../post/PostSkeleton";

const arr = new Array(20)
  .fill(null)
  .map((post, index) => <PostSkeleton key={`post-skeleton-${index}`} />);

function PostListSkeleton() {
  return <div className="w-75 my-2">{arr}</div>;
}

export default PostListSkeleton;
