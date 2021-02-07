import React from "react";
import { Col, Row } from "react-bootstrap";
import CreatorsToFollow from "./CreatorsToFollow";
import FeaturedPosts from "./FeaturedPosts";
import PostHero from "./PostHero";
import TopicsYouFollow from "./TopicsYouFollow";

function Hero() {
  return (
    <Row className="border-bottom">
      <Col sm={4}>
        <PostHero />
      </Col>
      <Col sm={5}>
        <FeaturedPosts />
      </Col>
      <Col>
        <CreatorsToFollow />
        <TopicsYouFollow />
      </Col>
    </Row>
  );
}

export default Hero;
