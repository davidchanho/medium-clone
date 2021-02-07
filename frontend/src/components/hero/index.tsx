import React from "react";
import { Col, Row } from "react-bootstrap";
import FeaturedPosts from "../featured-posts";
import FeaturedUsers from "../featured-users";
import PostHero from "../post-hero";

function Hero() {
  return (
    <Row>
      <Col sm={4}>
        <PostHero />
      </Col>
      <Col sm={5}>
        <FeaturedPosts />
      </Col>
      <Col>
        <FeaturedUsers />
      </Col>
    </Row>
  );
}

export default Hero;
