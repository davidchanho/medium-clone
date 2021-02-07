import React from "react";
import { Card } from "react-bootstrap";
import { useFindPublicationByPostId } from "../../hooks/useFindPublicationbyPostId";
import { PostProps } from "../../types";

function PostHeader({ post, className }: PostProps) {
  const publication = useFindPublicationByPostId(post.publicationId);

  return (
    <Card.Text className={`d-flex align-items-end ${className}`}>
      <img src={publication?.icon} className="mr-1 rounded" /> name in{" "}
      {publication?.name}
    </Card.Text>
  );
}

export default PostHeader;
