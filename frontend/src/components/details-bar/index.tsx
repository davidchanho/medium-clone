import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { FaRegHandPaper } from "react-icons/fa";
import { useFindUserbyPost } from "../../hooks/useFindUserbyPost";
import { useSelector } from "../../hooks/useSelector";
import Bookmark from "../../shared/bookmark";
import { postSelectors } from "../../store/posts/selectors";
import Comments from "../comments";

function DetailsBar() {
  const { post, loading, error } = useSelector(postSelectors);

  const user = useFindUserbyPost(post.userId);

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
      <Card.Header className="bg-white">
        <p>Written by {user?.name}</p>
        <p>{user?.about}</p>
        <Button>Follow</Button>
      </Card.Header>
      <Card.Body>
        <ListGroup>
          <ListGroup.Item>
            <FaRegHandPaper />
            103
          </ListGroup.Item>
          <ListGroup.Item>
            <Comments post={post} />
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
