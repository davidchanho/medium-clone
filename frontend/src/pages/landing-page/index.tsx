import faker from "faker";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import LandingHero from "../../components/hero/LandingHero";
import PostList from "../../components/post-list";
import TrendingPosts from "../../components/trending-posts";
import LandingNavbar from "../../shared/navbar/LandingNavbar";
import Publication from "../../shared/topic";
import { publicationSelectors } from "../../store";

const topics = [
  faker.lorem.word(5),
  faker.lorem.word(5),
  faker.lorem.word(5),
  faker.lorem.word(5),
  faker.lorem.word(5),
  faker.lorem.word(5),
];

function LandingPage() {
  const { publications, loading, error } = useSelector(publicationSelectors);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!publications) {
    return null;
  }

  const renderTopics = () => {
    return topics.map((topic: string) => {
      return <Publication key={`topics-you-follow-${topic}`} label={topic} />;
    });
  };

  return (
    <div>
      <div className="bg-yellow">
        <LandingNavbar />
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
