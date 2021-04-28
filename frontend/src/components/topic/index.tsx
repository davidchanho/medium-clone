import React from "react";
import { ListGroupItem } from "react-bootstrap";
import { ITopic } from "../../types";

function Topic({ label }: ITopic) {
  return (
    <ListGroupItem action className="mr-2 mb-2 text-bold">
      {label}
    </ListGroupItem>
  );
}

export default Topic;
