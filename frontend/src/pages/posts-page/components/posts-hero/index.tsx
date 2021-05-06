import React from "react";
import styled from "styled-components";
import CreatorsToFollow from "./CreatorsToFollow";
import FeaturedPosts from "./FeaturedPosts";
import HeroPost from "./HeroPost";
import TopicsYouFollow from "./TopicsYouFollow";

const Container = styled.div`
  width: 50vw;
  display: grid;
`;

function Hero() {
  return (
    <Container>
      <HeroPost />
      <FeaturedPosts />
      <div>
        <CreatorsToFollow />
        <TopicsYouFollow />
      </div>
    </Container>
  );
}

export default Hero;
