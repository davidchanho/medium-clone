import { shuffle } from "lodash";
import React from "react";
import { Card } from "react-bootstrap";
import { BsBookmarks } from "react-icons/bs";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Post from "../../shared/post";
import { postSelectors } from "../../store";

function ReadingList() {
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

  return (
    <Card className="mb-4">
      <Card.Header className="font-weight-bold text-uppercase d-flex align-items-center">
        <BsBookmarks className="mr-2" /> reading list
      </Card.Header>
      <Card.Body className="bg-light pt-1">
        {shuffle(posts)
          .slice(0, 5)
          .map((post) => (
            <Post key={`post-${post._id}`} post={post} className="mb-3" />
          ))}
        <NavLink
          to="/reading-list"
          className="text-success text-decoration-none"
        >
          See your full reading list
        </NavLink>
      </Card.Body>
    </Card>
  );
}

export default ReadingList;
