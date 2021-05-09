import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { IPost } from "../../types";
import Post from "../post";
import PostImg from "../post/PostImg";

function FeaturedPost({ ...post }: IPost) {
  return (
    <Card className='mb-3'>
      <Row>
        <Col xs={7}>
          <Post {...post} />
        </Col>
        <Col>
          <PostImg {...post} height={100} width={100} />
        </Col>
      </Row>
    </Card>
  );
}

export default FeaturedPost;
