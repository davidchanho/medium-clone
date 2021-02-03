import React from "react";
import { Facebook } from "react-content-loader";

const arr = new Array(20).fill(null).map(() => <Facebook />);

function PostListSkeleton() {
  return <div className="w-75 my-2">{arr}</div>;
}

export default PostListSkeleton;
