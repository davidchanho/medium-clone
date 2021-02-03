import React from "react";
import { usePostDetails } from "./usePostDetails";

function PostDetails() {
  const { renderPost } = usePostDetails();

  return <div className="w-75">{renderPost()}</div>;
}

export default PostDetails;
