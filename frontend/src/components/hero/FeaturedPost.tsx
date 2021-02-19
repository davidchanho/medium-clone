import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { PostProps } from "../../store/posts/types";
import Post from "../post";
import PostImg from "../post/PostImg";

function FeaturedPost({ post }: PostProps) {
  if (!post) {
    return null;
  }

  return (
    <Card className="d-flex justify-content-between mb-2">
      <Row>
        <Col sm={8}>
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
