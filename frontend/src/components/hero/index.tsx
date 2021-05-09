import React from "react";
import { Col, Row } from "react-bootstrap";
import CreatorsToFollow from "./CreatorsToFollow";
import FeaturedPosts from "./FeaturedPosts";
import HeroPost from "./HeroPost";
import TopicsYouFollow from "./TopicsYouFollow";

function Hero() {
  return (
    <Row className="border-bottom p-3 mx-5">
      <Col lg={4} xs={12}>
        <HeroPost />
      </Col>
      <Col lg={4} xs={12}>
        <FeaturedPosts />
      </Col>
      <Col lg={4} xs={12}>
        <CreatorsToFollow />
        <TopicsYouFollow />
      </Col>
    </Row>
  );
}

export default Hero;
