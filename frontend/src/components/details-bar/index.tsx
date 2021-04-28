import React from "react";
import { Button, Card, Dropdown, ListGroup } from "react-bootstrap";
import { useSelector } from "../../hooks/useSelector";
import { postSelectors } from "../../store";
import Bookmark from "../bookmark";
import Clap from "../clap";
import Comments from "../comments";

function DetailsBar() {
  const { post } = useSelector(postSelectors);

  const renderPost = () => {
    return (
      <h2>
        <Card.Header className="bg-white mb-3">
          <p className="mb-3">{post?.publication?.name}</p>
          <Button>Follow</Button>
        </Card.Header>{" "}
        <Dropdown.Divider />
        <Card.Body as={ListGroup}>
          <Clap />
          <Comments />
          <Bookmark />
        </Card.Body>
      </h2>
    );
  };

  return <Card className="w-25">{renderPost()}</Card>;
}

export default DetailsBar;
