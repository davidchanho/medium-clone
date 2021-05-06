import React from "react";
import { IPost } from "../../../../types";
import styles from "./index.module.scss";
import TrendingItem from "./TrendingItem";

interface Props {
  trending: IPost[];
}

function TrendingList({ trending }: Props) {
  return (
    <div className={styles.grid}>
      {trending.map((post: IPost, index: number) => (
        <TrendingItem key={post._id} {...post} index={index} />
      ))}
    </div>
  );
}

export default TrendingList;
