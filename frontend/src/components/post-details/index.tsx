import React from "react";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";
import DetailsHeader from "./DetailsHeader";
import DetailsImg from "./DetailsImg";

function PostDetails() {
  const { post } = useSelector(postSelectors);
  const { title, body } = post;

  const renderPost = () => {
    return (
      <>
        <h1>{title}</h1>
        <DetailsHeader {...post} />
        <DetailsImg {...post} />
        <p className="m-4">{body}</p>{" "}
      </>
    );
  };

  return <article className="w-75">{renderPost()}</article>;
}

export default PostDetails;
