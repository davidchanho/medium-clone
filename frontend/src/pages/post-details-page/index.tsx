import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PostDetails from "../../components/post-details";
import { useActions } from "../../hooks/useActions";

function PostDetailsPage() {
  const params = useParams();
  const { fetchPost } = useActions();

  useEffect(() => {
    fetchPost(params.id);
  }, []);

  return (
    <>
      <PostDetails />
    </>
  );
}

export default PostDetailsPage;
