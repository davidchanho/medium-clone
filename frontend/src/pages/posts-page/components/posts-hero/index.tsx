import React from "react";
import CreatorsToFollow from "./CreatorsToFollow";
import FeaturedPosts from "./FeaturedPosts";
import HeroPost from "./HeroPost";
import styles from "./index.module.scss";
import TopicsYouFollow from "./TopicsYouFollow";

function Hero() {
  return (
    <div className={styles.container}>
      <HeroPost />
      <FeaturedPosts />
      <div>
        <CreatorsToFollow />
        <TopicsYouFollow />
      </div>
    </div>
  );
}

export default Hero;
