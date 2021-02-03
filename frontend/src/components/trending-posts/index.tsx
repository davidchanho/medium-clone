import React from "react";
import { FiTrendingUp } from "react-icons/fi";
import styles from "./TrendingPosts.module.scss";
import { useTrendingPosts } from "./useTrendingPosts";

function TrendingPosts() {
  const { renderPosts } = useTrendingPosts();
  return (
    <div className={styles.trendingPosts}>
      <div className="font-weight-bold text-uppercase">
        <FiTrendingUp /> trending on medium
      </div>
      <div className={styles.grid}>{renderPosts()}</div>
    </div>
  );
}

export default TrendingPosts;
