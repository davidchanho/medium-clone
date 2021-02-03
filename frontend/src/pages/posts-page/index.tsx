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
