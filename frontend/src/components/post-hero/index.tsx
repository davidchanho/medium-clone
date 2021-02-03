import React from "react";
import { Col, Row } from "react-bootstrap";
import { usePostHero } from "./usePostHero";

function PostHero() {
  const { renderHeroPost, renderPosts } = usePostHero();

  return (
    <Row>
      <Col>{renderHeroPost()}</Col>
      <Col>{renderPosts()}</Col>
      <Col></Col>
    </Row>
  );
}

export default PostHero;
