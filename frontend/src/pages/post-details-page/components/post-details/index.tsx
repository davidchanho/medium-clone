import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { postSelectors } from "../../../../store";
import DetailsHeader from "./DetailsHeader";
import DetailsImg from "./DetailsImg";

const Article = styled.article`
  display: absolute;
`;

function PostDetails() {
  const { post } = useSelector(postSelectors);
  const { title, body } = post;

  return (
    <Article>
      <h1>{title}</h1>
      <DetailsHeader {...post} />
      <DetailsImg {...post} />
      <p>{body}</p>{" "}
    </Article>
  );
}

export default PostDetails;
