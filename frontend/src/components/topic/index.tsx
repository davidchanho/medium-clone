import React from "react";
import { ListGroupItem } from "react-bootstrap";
import { TopicProps } from "../../types";
import FollowButton from "../buttons/follow-button";

function Topic({ topic }: TopicProps) {
  if (!topic) {
    return null;
  }
  return (
    <ListGroupItem className="mr-2 mb-2 font-weight-bold d-flex align-items-center justify-content-between">
      {topic.name} <FollowButton topic={topic} />
    </ListGroupItem>
  );
}

export default Topic;
