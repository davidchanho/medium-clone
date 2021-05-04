import React from "react";
import CreatorsToFollow from "./CreatorsToFollow";
import FeaturedPosts from "./FeaturedPosts";
import HeroPost from "./HeroPost";
import TopicsYouFollow from "./TopicsYouFollow";

function Hero() {
  return (
    <div>
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
