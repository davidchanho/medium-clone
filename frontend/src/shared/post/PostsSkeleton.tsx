import React from "react";
import PostSkeleton from "./PostSkeleton";
import { PostsSkeletonProps } from "./types";

function PostsSkeleton({ amount }: PostsSkeletonProps) {
  const arr = new Array(amount)
    .fill(null)
    .map((post, index) => <PostSkeleton key={`post-skeleton-${index}`} />);

  return <div className="w-100 my-2">{arr}</div>;
}

export default PostsSkeleton;
