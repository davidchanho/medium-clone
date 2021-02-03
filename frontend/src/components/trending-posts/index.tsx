import React from "react";
import { FiTrendingUp } from "react-icons/fi";
import styles from "./TrendingPosts.module.scss";
import { useTrendingPosts } from "./useTrendingPosts";

function TrendingPosts() {
  const { renderPosts } = useTrendingPosts();
  return (
    <div className={styles.trendingPosts}>
      <div className="font-weight-bold text-uppercase d-flex align-items-center">
        <FiTrendingUp className="border rounded-circle p-1 mr-2" size={26} /> trending on
        medium
      </div>
      <div className={styles.grid}>{renderPosts()}</div>
    </div>
  );
}

export default TrendingPosts;
