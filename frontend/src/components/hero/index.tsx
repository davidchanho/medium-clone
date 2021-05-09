import React from "react";
import { Col, Row } from "react-bootstrap";
import CreatorsToFollow from "./CreatorsToFollow";
import FeaturedPosts from "./FeaturedPosts";
import HeroPost from "./HeroPost";
import TopicsYouFollow from "./TopicsYouFollow";

function Hero() {
  return (
    <div className="border-bottom">
      <Row className="d-flex align-items-center justify-content-center">
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
    </div>
  );
}

export default Hero;
