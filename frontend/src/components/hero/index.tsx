import { shuffle } from "lodash";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";
import CreatorsToFollow from "./CreatorsToFollow";
import FeaturedPosts from "./FeaturedPosts";
import HeroPost from "./HeroPost";
import TopicsYouFollow from "./TopicsYouFollow";

function Hero() {
  const { posts, loading, error } = useSelector(postSelectors);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!posts) {
    return null;
  }

  const renderHeroPost = () => {
    return (
      <>
        {shuffle(posts)
          .slice(0, 1)
          .map((post) => (
            <HeroPost post={post} />
          ))}
      </>
    );
  };

  return (
    <Row className="border-bottom p-5">
      <Col lg={4}>{renderHeroPost()}</Col>
      <Col lg={4}>
        <FeaturedPosts />
      </Col>
      <Col>
        <CreatorsToFollow />
        <TopicsYouFollow />
      </Col>
    </Row>
  );
}

export default Hero;
