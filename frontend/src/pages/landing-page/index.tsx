import React from "react";
import { Col, Row } from "react-bootstrap";
import LandingHero from "../../components/hero/LandingHero";
import LandingNavbar from "../../components/navbar/LandingNavbar";
import PostList from "../../components/post-list";
import TopicList from "../../components/topic-list";
import TrendingPosts from "../../components/trending-posts";

function LandingPage() {
  return (
    <div>
      <LandingNavbar />

      <div>
        <LandingHero />
        <img
          src="https://miro.medium.com/max/770/1*qcAZgT4Sk37MPSTGBH2KUw.png"
          alt=""
        />
      </div>

      <TrendingPosts />

      <Row>
        <Col
          lg={{ span: 4, offset: 1, order: 2 }}
          className="text-uppercase pt-5"
        >
          <h5>discover more of what matters to you</h5>
          <TopicList />
        </Col>
        <Col lg={7}>
          <PostList />
        </Col>
      </Row>
    </div>
  );
}

export default LandingPage;
