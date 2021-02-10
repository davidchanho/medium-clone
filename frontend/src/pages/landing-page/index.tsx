import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import LandingHero from "../../components/hero/LandingHero";
import PostList from "../../components/post-list";
import TrendingPosts from "../../components/trending-posts";
import LandingNavbar from "../../shared/navbar/LandingNavbar";
import Publication from "../../shared/publication";
import { publicationSelectors } from "../../store";
import { IPublication } from "../../store/publications/types";

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

  const renderPublications = () => {
    return publications.map((publication: IPublication) => {
      return (
        <Publication
          key={`topics-you-follow-${publication._id}`}
          label={publication.name}
        />
      );
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
        <Col lg={{ span: 4, offset: 1, order: 2 }} className="text-uppercase pt-5">
          <h5>discover more of what matters to you</h5>
          {renderPublications()}
        </Col>
        <Col lg={7}>
          <PostList />
        </Col>
      </Row>
    </div>
  );
}

export default LandingPage;
