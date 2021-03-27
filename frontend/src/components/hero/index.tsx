import React from "react";
import { Col, Row } from "react-bootstrap";
import CreatorsToFollow from "./CreatorsToFollow";
import FeaturedPosts from "./FeaturedPosts";
import HeroPost from "./HeroPost";
import TopicsYouFollow from "./TopicsYouFollow";

function Hero() {
  return (
    <Row className="border-bottom p-5">
      <Col lg={4}>
        <HeroPost />
      </Col>
      <Col lg={4}>
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
