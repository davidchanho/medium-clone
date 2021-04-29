import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailsBar from "../../components/details-bar";
import PostDetails from "../../components/post-details";
import { useActions } from "../../hooks/useActions";

function PostDetailsPage() {
  const params = useParams();
  const { getPost } = useActions();

  useEffect(() => {
    getPost(params.id);
  }, [getPost, params.id]);

  return (
    <div className="d-flex align-items-start">
      <DetailsBar />
      <PostDetails />
    </div>
  );
}

export default PostDetailsPage;
