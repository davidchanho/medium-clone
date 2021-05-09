import React from "react";
import { PostProps } from "../../types";
import Post from "../post";

interface TrendingPostProps extends PostProps {
  index: number;
}

function TrendingPost({ index, post }: TrendingPostProps) {
  return (
    <div className="d-flex">
      <h3 className="text-muted mr-4">0{index + 1}</h3>
      <Post key={`post-${post?._id}`} post={post} />
    </div>
  );
}

export default TrendingPost;
