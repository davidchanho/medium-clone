import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import DetailsBar from "./components/details-bar";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "../../hooks/useSelector";
import { postSelectors } from "../../store";
import PostDetails from "./components/post-details";

function PostDetailsPage() {
  const params = useParams();
  const { getPost } = useActions();
  const { post } = useSelector(postSelectors);

  useEffect(() => {
    getPost(params.id);
  }, [getPost, params.id]);

  return (
    <div>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.title} />
      </Helmet>
      <DetailsBar />
      <PostDetails />
    </div>
  );
}

export default PostDetailsPage;
