import React from "react";
import Skeleton from "react-loading-skeleton";
import TrendingGrid from "./TrendingGrid";

function TrendingSkeleton() {
  return (
    <TrendingGrid>
      <Skeleton count={6} width={150} height={50} />
    </TrendingGrid>
  );
}

export default TrendingSkeleton;
