import React from "react";
import PostDetails from "../../components/post-details";
import usePostsDetailsPage from "./usePostsDetailsPage";

function PostDetailsPage() {
  usePostsDetailsPage();

  return (
    <>
      <PostDetails />
    </>
  );
}

export default PostDetailsPage;
