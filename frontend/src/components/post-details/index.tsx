import React from "react";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";
import DetailsHeader from "./DetailsHeader";
import DetailsImg from "./DetailsImg";

function PostDetails() {
  const { post } = useSelector(postSelectors);

  return (
    <article className="w-50">
      <h1>{post?.title}</h1>
      <DetailsHeader {...post} />
      <DetailsImg {...post} />
      <p className="m-4">{post?.body}</p>{" "}
    </article>
  );
}

export default PostDetails;
