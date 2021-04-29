import React from "react";
import { Col, Row } from "react-bootstrap";
import CreatorsToFollow from "./CreatorsToFollow";
import FeaturedPosts from "./FeaturedPosts";
import HeroPost from "./HeroPost";
import TopicsYouFollow from "./TopicsYouFollow";

function Hero() {
  return (
    <Row className="border-bottom p-5">
      <Col lg={{ span: 4, offset: 1 }} xs={12}>
        <HeroPost />
      </Col>
      <Col lg={3} xs={12}>
        <FeaturedPosts />
      </Col>
      <Col lg={{ span: 3, offset: -1 }} xs={12}>
        <CreatorsToFollow />
        <TopicsYouFollow />
      </Col>
    </Row>
  );
}

export default Hero;
