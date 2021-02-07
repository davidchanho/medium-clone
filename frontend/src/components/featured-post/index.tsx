import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { PostProps } from "../../types";
import Post from "../post";
import PostImg from "../post/PostImg";

function FeaturedPost({ post }: PostProps) {
  return (
    <Card
      className="d-flex justify-content-between mb-2"
    >
      <Row>
        <Col sm={8}>
          <Post post={post} />
        </Col>
        <Col>
          <PostImg post={post} />
        </Col>
      </Row>
    </Card>
  );
}

export default FeaturedPost;
