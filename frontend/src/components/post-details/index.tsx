import React from "react";
import { usePostDetails } from "./usePostDetails";

function PostDetails() {
  const { renderPost } = usePostDetails();
  
  return <div>{renderPost()}</div>;
}

export default PostDetails;
