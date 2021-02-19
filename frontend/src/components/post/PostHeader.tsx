import React from "react";
import { Card } from "react-bootstrap";
import { useFindPublicationByPostId } from "../../hooks/useFindPublicationbyPostId";
import { useFindUserbyPost } from "../../hooks/useFindUserbyPost";
import { PostProps } from "../../store/posts/types";

function PostHeader({ post, className }: PostProps) {
  const publication = useFindPublicationByPostId(post.publicationId);
  const user = useFindUserbyPost(post.userId);

  if (!post) {
    return null;
  }

  return (
    <Card.Text className={`d-flex align-items-end mb-1 ${className}`}>
      <img src={publication?.icon} className="mr-1 rounded" /> {user?.name} in{" "}
      {publication?.name}
    </Card.Text>
  );
}

export default PostHeader;
