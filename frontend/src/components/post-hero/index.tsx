import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { BiUserCircle } from "react-icons/bi";
import { usePostHero } from "./usePostHero";

function PostHero() {
  const { renderHeroPost, renderPosts } = usePostHero();

  return (
    <Row>
      <Col>{renderHeroPost()}</Col>
      <Col>{renderPosts()}</Col>
      <Col>
        <div>
          <p className="text-uppercase font-weight-bold">Creators to follow</p>
          <BiUserCircle />{" "}
          <div>
            <div>name</div>
            <div>name</div>
          </div>{" "}
          <Button variant="success">Follow</Button>
        </div>
        <div>
          <p className="text-uppercase font-weight-bold">Topics you follow</p>
        </div>
      </Col>
    </Row>
  );
}

export default PostHero;
