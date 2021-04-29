import React from "react";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";
import TrendingPost from "./TrendingPost";
import styles from "./TrendingPosts.module.scss";

function TrendingPosts() {
  const { trending } = useSelector(postSelectors);

  return (
    <div className="border-bottom mt-4 pb-4">
      <div className="d-flex justify-content-center flex-column mx-auto">
        <div className="font-weight-bold text-uppercase d-flex align-items-center">
          <img src="../../assets/trending.svg" alt="" width="28" height="29" />
          trending on medium
        </div>
        <div className={`p-4 ${styles.grid}`}>
          {trending.map((post, index) => (
            <TrendingPost key={post._id} {...post} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendingPosts;
