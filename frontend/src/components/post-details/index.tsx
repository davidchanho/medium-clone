import React from "react";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";
import DetailsHeader from "./DetailsHeader";
import DetailsImg from "./DetailsImg";

function PostDetails() {
  const { post } = useSelector(postSelectors);
  const { title, body } = post;

  return (
    <article className="w-75">
      <h1>{title}</h1>
      <DetailsHeader {...post} />
      <DetailsImg {...post} />
      <p className="m-4">{body}</p>{" "}
    </article>
  );
}

export default PostDetails;
