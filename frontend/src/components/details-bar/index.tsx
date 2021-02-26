import React from "react";
import { Button, Card, Dropdown, ListGroup } from "react-bootstrap";
import { useSelector } from "../../hooks/useSelector";
import { postSelectors } from "../../store/posts/selectors";
import Bookmark from "../bookmark";
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

  return (
    <Card className="w-25">
      <Card.Header className="bg-white mb-3">
        <p className="mb-3">{post?.publication?.name}</p>
        <Button>Follow</Button>
      </Card.Header>{" "}
      <Dropdown.Divider />
      <Card.Body as={ListGroup}>
        <Clap />
        <Comments post={post} />
        <Bookmark post={post} />
      </Card.Body>
    </Card>
  );
}

export default DetailsBar;
