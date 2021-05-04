import React from "react";
import { IPost } from "../../types";
import Post from "../post";

interface TrendingPostProps extends IPost {
  index: number;
}

function TrendingPost({ index, ...post }: TrendingPostProps) {
  return (
    <div className="w-100 d-flex align-items-center justify-content-between">
      <h3 className="w-25 text-muted">0{index + 1}</h3>
      <Post key={`post-${post._id}`} {...post} />
    </div>
  );
}

export default TrendingPost;
