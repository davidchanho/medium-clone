import React from "react";
import { IPost } from "../../types";
import Post from "../post";

interface TrendingPostProps {
  post: IPost;
  index: number;
}

function TrendingPost({ post, index }: TrendingPostProps) {
  return (
    <div className="d-flex">
      <h3 className="text-muted mr-2">0{index + 1}</h3>
      <Post key={`post-${post._id}`} post={post} />
    </div>
  );
}

export default TrendingPost;
