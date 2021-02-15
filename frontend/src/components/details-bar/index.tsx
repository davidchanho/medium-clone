import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useSelector } from "../../hooks/useSelector";
import Bookmark from "../../shared/bookmark";
import { postSelectors } from "../../store/posts/selectors";
import Clap from "../clap";
import Comments from "../comments";

function DetailsBar() {
  const { post, loading, error } = useSelector(postSelectors);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!post) {
    return null;
  }

  const renderHeader = () => {
    return (
      <Card.Header className="bg-white">
        <Button>Follow</Button>
      </Card.Header>
    );
  };

  const renderBody = () => {
    return (
      <Card.Body as={ListGroup}>
        <ListGroup.Item>
          <Clap />
        </ListGroup.Item>
        <ListGroup.Item>
          <Comments post={post} />
        </ListGroup.Item>
        <ListGroup.Item>
          <Bookmark post={post} />
        </ListGroup.Item>
      </Card.Body>
    );
  };

  return (
    <Card className="w-25">
      {renderHeader()} {renderBody()}{" "}
    </Card>
  );
}

export default DetailsBar;
