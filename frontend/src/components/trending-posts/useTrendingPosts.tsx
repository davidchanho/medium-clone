import React from "react";
import { useSelector } from "react-redux";
import { shuffle } from "../../helpers/shuffle";
import { postSelectors } from "../../store";
import TrendingPost from "./TrendingPost";
import styles from "./TrendingPosts.module.scss";

const useTrendingPosts = () => {
  const { posts, loading, error } = useSelector(postSelectors);
  const shufflePosts = shuffle(posts);

  const renderPosts = () => {
    if (loading) {
      return <h1>Loading...</h1>;
    }

    if (error) {
      return <h1>{error}</h1>;
    }

    return (
      <div className={styles.grid}>
        {shufflePosts.slice(0, 6).map((post, index) => (
          <TrendingPost post={post} index={index} />
        ))}
      </div>
    );
  };

  return { renderPosts };
};

export default useTrendingPosts;
