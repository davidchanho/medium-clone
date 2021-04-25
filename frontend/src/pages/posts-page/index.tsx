import React from "react";
import { Col, Row } from "react-bootstrap";
import Hero from "../../components/hero";
import PostList from "../../components/post-list";
import SideBar from "../../components/side-bar";
import TrendingPosts from "../../components/trending-posts";

function PostsPage() {
  return (
    <>
      <Hero />
      <TrendingPosts />
      <Row>
        <Col lg={{ span: 4, offset: 1, order: 2 }} xs={12}>
          <SideBar />
        </Col>
        <Col lg={7} xs={12}>
          <PostList />
        </Col>
      </Row>
    </>
  );
}

export default PostsPage;
