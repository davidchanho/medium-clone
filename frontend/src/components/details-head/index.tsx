import React from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";

function DetailsHead() {
  const { post } = useSelector(postSelectors);

  return (
    <Helmet>
      <title>{post?.title}</title>
      <meta name="description" content={post?.title} />
    </Helmet>
  );
}

export default DetailsHead;
