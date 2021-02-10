import { shuffle } from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { ReactComponent as TrendingLogo } from "../../asset/trending.svg";
import { postSelectors } from "../../store";
import TrendingPost from "./TrendingPost";
import styles from "./TrendingPosts.module.scss";

function TrendingPosts() {
  const { posts, loading, error } = useSelector(postSelectors);
  const shufflePosts = shuffle(posts);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  const renderPosts = () => {
    return (
      shufflePosts.slice(0, 6).map((post, index) => (
        <TrendingPost key={post._id} post={post} index={index} />
      ))
    )
  }

  return (
    <div className="border-bottom mt-4 pb-4">
      <div className="font-weight-bold text-uppercase d-flex align-items-center pt-4 px-4 pb-0">
        <TrendingLogo />
        trending on medium
      </div>
      <div className={`p-4 ${styles.grid}`}>
        {renderPosts()}
      </div>
    </div>
  );
}

export default TrendingPosts;
