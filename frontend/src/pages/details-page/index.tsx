import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import DetailsBar from "./components/details-bar";
import DetailsHead from "./components/details-head";
import PostDetails from "./components/post-details";

function DetailsPage() {
  const params = useParams();
  const { getPost } = useActions();

  useEffect(() => {
    getPost(params.id);
  }, [getPost, params.id]);

  return (
    <div>
      <DetailsHead />
      <DetailsBar />
      <PostDetails />
    </div>
  );
}

export default DetailsPage;
