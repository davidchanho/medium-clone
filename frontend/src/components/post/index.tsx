import React from "react";
import { Button, Card } from "react-bootstrap";
import { useActions } from "../../hooks/useActions";
import { IPost } from "../../store/reducers/posts";

interface PostProps {
  post: IPost;
}

function Post({ post }: PostProps) {
  const { deletePost, fetchPost } = useActions();

  const onDeletePost = () => {
    deletePost(post._id);
  };

  const onFetchPost = () => {
    fetchPost(post._id);
  };

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
