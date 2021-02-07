import React from "react";
import { Card } from "react-bootstrap";
import { useFindPublicationByPostId } from "../../hooks/useFindPublicationbyPostId";
import { PostProps } from "../../types";

function PostHeader({ post }: PostProps) {
  const publication = useFindPublicationByPostId(post.publicationId);

  return (
    <Card.Text className="mb-0">
      <img src={publication?.icon} /> firstname lastname in {publication?.name}
    </Card.Text>
  );
}

export default PostHeader;
