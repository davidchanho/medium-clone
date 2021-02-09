import React from "react";
import { ReactComponent as TrendingLogo } from "../../asset/trending.svg";
import useTrendingPosts from "./useTrendingPosts";

function TrendingPosts() {
  const { renderPosts } = useTrendingPosts();

  return (
    <div className="border-bottom mt-4 pb-4">
      <div className="font-weight-bold text-uppercase d-flex align-items-center pt-4 px-4 pb-0">
        <TrendingLogo />
        trending on medium
      </div>
      {renderPosts()}
    </div>
  );
}

export default TrendingPosts;
