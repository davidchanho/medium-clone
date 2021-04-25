import React from "react";
import { ListGroupItem } from "react-bootstrap";
import { TopicProps } from "../../store/publications/types";

function Topic({ label }: TopicProps) {
  return (
    <ListGroupItem variant="light" className="mr-2 mb-2">
      {label}
    </ListGroupItem>
  );
}

export default Topic;