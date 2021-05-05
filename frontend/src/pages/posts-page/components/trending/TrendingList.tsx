import React from "react";
import { IPost } from "../../../../types";
import TrendingGrid from "./TrendingGrid";
import TrendingItem from "./TrendingItem";

interface Props {
  trending: IPost[];
}

function TrendingList({ trending }: Props) {
  return (
    <TrendingGrid>
      {trending.map((post: IPost, index: number) => (
        <TrendingItem key={post._id} {...post} index={index} />
      ))}
    </TrendingGrid>
  );
}

export default TrendingList;
