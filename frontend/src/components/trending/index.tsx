import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";
import styles from "./index.module.scss";
import { ReactComponent as TrendingIcon } from "./trending.svg";
import TrendingSkeleton from "./TrendingSkeleton";

const TrendingList = lazy(() => import("./TrendingList"));

function Trending() {
  const { trending } = useSelector(postSelectors);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <TrendingIcon />
        <p>TRENDING ON MEDIUM</p>
      </header>

      <Suspense fallback={<TrendingSkeleton />}>
        <TrendingList trending={trending} />
      </Suspense>
    </div>
  );
}

export default Trending;
