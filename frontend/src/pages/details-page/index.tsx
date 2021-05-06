import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { postSelectors } from "../../store";
import DetailsBar from "./components/details-bar";
import DetailsHead from "./components/details-head";
import DetailsHeader from "./components/details-header";
import DetailsImg from "./components/details-img";
import Footer from "./components/footer";

const Article = styled.article`
  display: absolute;
`;

function DetailsPage() {
  const { post } = useSelector(postSelectors);
  return (
    <>
      <DetailsHead />
      <DetailsBar />
      <Article>
        <h1>{post?.title}</h1>
        <DetailsHeader {...post} />
        <DetailsImg {...post} />
        <p>{post?.body}</p>{" "}
      </Article>
      <Footer />
    </>
  );
}

export default DetailsPage;
