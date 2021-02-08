import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { BiMessage } from "react-icons/bi";
import { FaRegHandPaper } from "react-icons/fa";
import { useSelector } from "../../hooks/useSelector";
import Bookmark from "../../shared/bookmark";
import { postSelectors } from "../../store";

function DetailsBar() {
  const { post } = useSelector(postSelectors);
  
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
            <Bookmark post={post} />
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default DetailsBar;
