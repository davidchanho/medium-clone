import React from "react";
import { Col, Row } from "react-bootstrap";
import LandingHero from "../../components/hero/LandingHero";
import PostList from "../../components/post-list";
import Topic from "../../components/topic";
import TrendingPosts from "../../components/trending-posts";
import LandingNavbar from "../../components/navbar/LandingNavbar";

const topics = ["topic1", "topic2", "topic3"];

function LandingPage() {
  const renderTopics = () => {
    return topics.map((topic: string) => {
      return <Topic key={`topics-you-follow-${topic}`} label={topic} />;
    });
  };

  return (
    <div>
      <LandingNavbar />

      <div>
        <LandingHero />
        <img src="https://miro.medium.com/max/770/1*qcAZgT4Sk37MPSTGBH2KUw.png" />
      </div>
      <TrendingPosts />
      <Row>
        <Col
          lg={{ span: 4, offset: 1, order: 2 }}
          className="text-uppercase pt-5"
        >
          <h5>discover more of what matters to you</h5>
          {renderTopics()}
        </Col>
        <Col lg={7}>
          <PostList />
        </Col>
      </Row>
    </div>
  );
}

export default LandingPage;
