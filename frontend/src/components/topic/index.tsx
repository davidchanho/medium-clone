import React from "react";
import { Button, ListGroupItem } from "react-bootstrap";
import { ITopic } from "../../types";

function Topic({ name }: ITopic) {
  return (
    <ListGroupItem className="mr-2 mb-2 font-weight-bold d-flex align-items-center justify-content-between">
      {name} <Button variant='success' className='pill'>Follow</Button>
    </ListGroupItem>
  );
}

export default Topic;
