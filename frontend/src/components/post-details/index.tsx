import React from "react";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";
import DetailsHeader from "./DetailsHeader";
import DetailsImg from "./DetailsImg";

function PostDetails() {
  const { post, loading, error } = useSelector(postSelectors);

  const renderPost = () => {
    return (
      <>
        <h1>{post.title}</h1>
        <DetailsHeader post={post} />
        <DetailsImg post={post} />
        <p className="m-4">{post.body}</p>{" "}
      </>
    );
  };

  return <article className="w-75">{renderPost()}</article>;
}

export default PostDetails;
