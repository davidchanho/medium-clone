import React from "react";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";
import TrendingPost from "./TrendingPost";
import styles from "./TrendingPosts.module.scss";

function TrendingPosts() {
  const { trending } = useSelector(postSelectors);

  const renderPosts = () => {
    return trending.map((post, index) => (
      <TrendingPost key={post._id} post={post} index={index} />
    ));
  };

  return (
    <div className="border-bottom mt-4 pb-4">
      <div className="font-weight-bold text-uppercase d-flex align-items-center pt-4 px-4 pb-0">
        <img src="/trending.svg" alt="" />
        trending on medium
      </div>
      <div className={`p-4 ${styles.grid}`}>{renderPosts()}</div>
    </div>
  );
}

export default TrendingPosts;
