import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";
import { IconBookmarks } from "../icons";
import Post from "../post";

function ReadingList() {
  const { reading } = useSelector(postSelectors);

  return (
    <Card className="mb-4">
      <Card.Header className="font-weight-bold text-uppercase d-flex align-items-center">
        <IconBookmarks className="mr-2" /> reading list
      </Card.Header>

      <Card.Body className="bg-light pt-1">
        {reading.map((post) => (
          <Post key={`post-${post._id}`} {...post} />
        ))}
        <p className="text-success text-decoration-none">
          See your full reading list
        </p>
      </Card.Body>
    </Card>
  );
}

export default ReadingList;
