import React from "react";
import PostSkeleton from "./PostSkeleton";

interface PostsSkeletonProps {
  amount: number;
}

function PostsSkeleton({ amount }: PostsSkeletonProps) {
  const arr = new Array(amount)
    .fill(null)
    .map((post, index) => <PostSkeleton key={`post-skeleton-${index}`} />);

  return <div>{arr}</div>;
}

export default PostsSkeleton;
