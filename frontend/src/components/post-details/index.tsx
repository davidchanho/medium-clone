import React from "react";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";
import DetailsHeader from "./DetailsHeader";
import DetailsImg from "./DetailsImg";

function PostDetails() {
  const { post, loading, error } = useSelector(postSelectors);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!post) {
    return null;
  }

  return (
    <div className="w-75">
      <article>
        <h3>{post.title}</h3>
        <DetailsHeader post={post} />
        <DetailsImg post={post} />
        <p>{post.body}</p>
      </article>
    </div>
  );
}

export default PostDetails;
