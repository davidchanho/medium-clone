import React, { lazy, Suspense } from "react";
import styled from "styled-components";
import { useSelector } from "../../../../hooks/useSelector";
import { postSelectors } from "../../../../store";
import TrendingHeader from "./TrendingHeader";
import TrendingSkeleton from "./TrendingSkeleton";

const TrendingList = lazy(() => import("./TrendingList"));

const TrendingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

function Trending() {
  const { trending } = useSelector(postSelectors);

  return (
    <TrendingContainer>
      <TrendingHeader />
      <Suspense fallback={<TrendingSkeleton />}>
        <TrendingList trending={trending} />
      </Suspense>
    </TrendingContainer>
  );
}

export default Trending;
