import React from "react";
import { FiTrendingUp } from "react-icons/fi";
import useTrendingPosts from "./useTrendingPosts";

function TrendingPosts() {
  const { renderPosts } = useTrendingPosts();

  return (
    <div className="border-bottom">
      <div className="font-weight-bold text-uppercase d-flex align-items-center pt-4 px-4 pb-0">
        <FiTrendingUp className="border rounded-circle p-1 mr-2" size={26} />{" "}
        trending on medium
      </div>
      {renderPosts()}
    </div>
  );
}

export default TrendingPosts;
