import React from "react";
import { IPost } from "../../types";
import Post from "../post";
import styles from "./index.module.scss";

interface Props extends IPost {
  index: number;
}

function TrendingItem({ index, ...post }: Props) {
  return (
    <li className={styles.item}>
      <span className={styles.numbered}>0{index + 1}</span>
      <Post key={`post-${post._id}`} {...post} />
    </li>
  );
}

export default TrendingItem;
