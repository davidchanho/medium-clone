import React from "react";
import { Button, Card } from "react-bootstrap";
import { PostProps } from "../../types";
import { usePost } from "./usePost";

function Post({ post }: PostProps) {
  const { onDeletePost, onFetchPost } = usePost(post);

  return (
    <Card className="w-25">
      <Card.Header>
        <Card.Title>{post.title}</Card.Title>
        <Button variant="danger" onClick={onDeletePost}>
          Delete
        </Button>
        <Button variant="info">Update</Button>
        <Button variant="success" onClick={onFetchPost}>
          Details
        </Button>
      </Card.Header>
    </Card>
  );
}

export default Post;
