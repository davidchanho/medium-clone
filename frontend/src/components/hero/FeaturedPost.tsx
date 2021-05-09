import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { PostProps } from "../../types";
import Post from "../post";
import PostImg from "../post/PostImg";

function FeaturedPost({ post }: PostProps) {
  return (
    <Card className="mb-3">
      <Row>
        <Col xs={7}>
          <Post post={post} />
        </Col>
        <Col>
          <PostImg post={post} height={100} width={100} />
        </Col>
      </Row>
    </Card>
  );
}

export default FeaturedPost;
