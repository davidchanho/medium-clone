import React from "react";
import { ListGroupItem } from "react-bootstrap";
import { ITopic } from "../../types";

function Topic({ label }: ITopic) {
  return (
    <ListGroupItem variant="light" className="mr-2 mb-2">
      {label}
    </ListGroupItem>
  );
}

export default Topic;
