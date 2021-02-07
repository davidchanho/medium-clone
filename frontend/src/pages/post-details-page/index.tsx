import React from "react";
import DetailsBar from "../../components/details-bar";
import PostDetails from "../../components/post-details";
import usePostsDetailsPage from "./usePostsDetailsPage";

function PostDetailsPage() {
  usePostsDetailsPage();

  return (
    <div className="d-flex">
      <DetailsBar />
      <PostDetails />
    </div>
  );
}

export default PostDetailsPage;
