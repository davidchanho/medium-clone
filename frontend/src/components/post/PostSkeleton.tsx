import React from "react";
import Skeleton from "react-loading-skeleton";

function PostSkeleton() {
  return (
    <div className="my-2 d-flex">
      <Skeleton count={5} />
      <Skeleton width={200} height={135} />
    </div>
  );
}

export default PostSkeleton;
