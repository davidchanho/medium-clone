import { shuffle } from "lodash";
import React, { useEffect, useState } from "react";
import { Card, CardDeck, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";
import { IPost } from "../../types";
import Post from "../post";
import PostImg from "../post/PostImg";

function FeaturedPosts() {
  const { posts, loading, error } = useSelector(postSelectors);

  const [post, setPost] = useState<IPost[]>();

  useEffect(() => {
    setPost(shuffle(posts).slice(0, 4));
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!posts) {
    return null;
  }

  if (!post) {
    return null;
  }

  return (
    <CardDeck className="d-flex flex-column border-right">
      {post.map((post) => (
        <Card
          key={`hero-center-${post._id}`}
          className="d-flex justify-content-between mb-2"
        >
          <Row>
            <Col sm={8}>
              <Post post={post} />
            </Col>
            <Col>
              <PostImg post={post} />
            </Col>
          </Row>
        </Card>
      ))}
    </CardDeck>
  );
}

export default FeaturedPosts;
