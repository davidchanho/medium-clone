import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Hero from "../../components/hero";
import PostList from "../../components/post-list";
import SideBar from "../../components/side-bar";
import TrendingPosts from "../../components/trending-posts";
import { useActions } from "../../hooks/useActions";
import { postSelectors, publicationSelectors, userSelectors } from "../../store";

function PostsPage() {
  const { getPosts, getPublications, getUser, getUsers } = useActions();
  const { posts } = useSelector(postSelectors);
  const { publications } = useSelector(publicationSelectors);
  const { users, user } = useSelector(userSelectors);

  useEffect(() => {
    if (posts.length === 0) {
      getPosts();
    }
    if (publications.length === 0) {
      getPublications();
    }
    if (users.length === 0) {
      getUsers();
    }
    if (!user._id) {
      getUser("6022cbd41b05807030594efe");
    }
  }, []);

  return (
    <>
      <Hero />
      <TrendingPosts />
      <Row>
        <Col lg={{ span: 4, offset: 1, order: 2 }}>
          <SideBar />
        </Col>
        <Col lg={7}>
          <PostList />
        </Col>
      </Row>
    </>
  );
}

export default PostsPage;
