import React from "react";
import MediumLogo from "../../components/medium-logo";
import NotFoundHeader from "../../components/not-found-header";
import NotFoundPost from "../../components/not-found-post";
import { useSelector } from "../../hooks/useSelector";
import { postSelectors } from "../../store";
import styles from "./index.module.scss";

function NotFoundPage() {
  const { posts } = useSelector(postSelectors);

  return (
    <>
      <MediumLogo width="120" height="32" />

      <NotFoundHeader />

      <section className={styles.posts}>
        {posts.slice(0, 3).map((post) => (
          <NotFoundPost {...post} />
        ))}
      </section>
    </>
  );
}

export default NotFoundPage;
