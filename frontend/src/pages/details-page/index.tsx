import React from "react";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";
import DetailsBar from "./components/details-bar";
import DetailsHead from "./components/details-head";
import DetailsHeader from "./components/details-header";
import DetailsImg from "./components/details-img";
import Footer from "./components/footer";
import styles from "./index.module.scss";

function DetailsPage() {
  const { post } = useSelector(postSelectors);
  return (
    <>
      <DetailsHead />
      <DetailsBar />
      <article className={styles.article}>
        <h1>{post?.title}</h1>
        <DetailsHeader {...post} />
        <DetailsImg {...post} />
        <p>{post?.body}</p>{" "}
      </article>
      <Footer />
    </>
  );
}

export default DetailsPage;
