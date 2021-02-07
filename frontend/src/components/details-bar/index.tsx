import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { BiMessage } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { FaRegHandPaper } from "react-icons/fa";

function DetailsBar() {
  return (
    <Card className="w-25">
      <Card.Header className="bg-white">
        Written by name aboutadsfsadfsadfsadfsdfsdf
        <Button>Follow</Button>
      </Card.Header>
      <Card.Body>
        <ListGroup>
          <ListGroup.Item>
            <FaRegHandPaper />
            103
          </ListGroup.Item>
          <ListGroup.Item>
            <BiMessage /> 1
          </ListGroup.Item>
          <ListGroup.Item>
            <BsBookmark />
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default DetailsBar;