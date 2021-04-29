import React from "react";
import { Col, Row } from "react-bootstrap";
import Hero from "../../components/hero";
import PostList from "../../components/post-list";
import SideBar from "../../components/side-bar";
import TrendingPosts from "../../components/trending-posts";
import { Helmet } from "react-helmet";

function PostsPage() {
  return (
    <>
      <Helmet>
        <title>React Medium</title>
        <meta name="description" content="React Medium" />
      </Helmet>

      <Hero />
      <TrendingPosts />
      <Row>
        <Col lg={{ span: 4, order: 2 }} xs={12}>
          <SideBar />
        </Col>
        <Col lg={{ span: 6, offset: 1 }} xs={12}>
          <PostList />
        </Col>
      </Row>
    </>
  );
}

export default PostsPage;
