import React from "react";
import { Button, Card } from "react-bootstrap";
import { useActions } from "../../hooks/useActions";
import { PostProps } from "../../types";

function Post({ post }: PostProps) {
  const { deletePost, fetchPost } = useActions();
  const { _id, title } = post;

  const onDeletePost = () => {
    deletePost(_id);
  };

  const onFetchPost = () => {
    fetchPost(_id);
  };

  return (
    <Card className="w-25">
      <Card.Header>
        <Card.Title>{title}</Card.Title>
        <Button variant="danger" onClick={onDeletePost}>
          Delete
        </Button>
        <Button variant="info" >
          Update
        </Button>
        <Button variant="success" onClick={onFetchPost}>
          Details
        </Button>
      </Card.Header>
    </Card>
  );
}

export default Post;
