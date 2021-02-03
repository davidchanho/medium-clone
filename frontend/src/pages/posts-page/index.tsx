import React from "react";
import { Col, Row } from "react-bootstrap";
import PostHero from "../../components/post-hero";
import PostList from "../../components/post-list";
import SideBar from "../../components/side-bar";
import TrendingPosts from "../../components/trending-posts";
import { usePostsPage } from "./usePostsPage";

function PostsPage() {
  usePostsPage();

  return (
    <>
      <PostHero />
      <TrendingPosts />
      <Row>
        <Col sm={6}>
          <PostList />
        </Col>
        <Col sm={{ span: 5, offset: 1 }}>
          <SideBar />
        </Col>
      </Row>
    </>
  );
}

export default PostsPage;
