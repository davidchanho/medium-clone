import React from "react";
import { Card } from "react-bootstrap";
import { BsBookmark } from "react-icons/bs";
import { formatDate } from "../../helpers/formatDate";
import { PostProps } from "../../types";
import { usePost } from "../post/usePost";

function PostHeroItem({ post }: PostProps) {
  const { onGetPost, publicationName } = usePost(post);

  return (
    <Card className="w-100 d-flex flex-row border-0">
      <Card.Header className="w-100 bg-white border-0 d-flex justify-content-between">
        <div className="w-100 pointer mt-auto" onClick={onGetPost}>
          <Card.Text>
            <BsBookmark /> firstname lastname in {publicationName}
          </Card.Text>
          <Card.Title className="text-capitalize">{post.title}</Card.Title>
          <Card.Text className="text-secondary">
            {formatDate(post.date)}
          </Card.Text>
        </div>
      </Card.Header>
      <Card.Body className="pointer" onClick={onGetPost}>
        <Card.Img className="w-75" src={post.image} />
      </Card.Body>
    </Card>
  );
}

export default PostHeroItem;
