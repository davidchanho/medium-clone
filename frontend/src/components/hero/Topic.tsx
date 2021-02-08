import React from "react";
import { Button } from "react-bootstrap";
import { PublicationProps } from "../../types";

function Topic({ publication }: PublicationProps) {
  return (
    <Button variant="light" className="mr-2 mb-2">
      {publication.name}
    </Button>
  );
}

export default Topic;
