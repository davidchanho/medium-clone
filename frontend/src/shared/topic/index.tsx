import React from "react";
import { Button } from "react-bootstrap";
import { TopicProps } from "../../store/publications/types";

function Topic({ label }: TopicProps) {
  return (
    <Button variant="light" className="mr-2 mb-2">
      {label}
    </Button>
  );
}

export default Topic;