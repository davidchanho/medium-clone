import React from "react";
import { Col, Row } from "react-bootstrap";
import Hero from "../../components/hero";
import PostList from "../../components/post-list";
import SideBar from "../../components/side-bar";
import TrendingPosts from "../../components/trending-posts";
import { usePostsPage } from "./usePostsPage";

function PostsPage() {
  usePostsPage();

  return (
    <>
      <Hero />
      <TrendingPosts />
      <Row>
        <Col sm={8}>
          <PostList />
        </Col>
        <Col>
          <SideBar />
        </Col>
      </Row>
    </>
  );
}

export default PostsPage;
