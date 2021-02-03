import React from "react";
import { Col, Row } from "react-bootstrap";
import PostHero from "../../components/post-hero";
import PostList from "../../components/post-list";
import SideBar from "../../components/side-bar";
import { usePostsPage } from "./usePostsPage";

function PostsPage() {
  usePostsPage();

  return (
    <>
      <PostHero />
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
