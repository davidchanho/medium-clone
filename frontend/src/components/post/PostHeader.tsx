import React from "react";
import { Card } from "react-bootstrap";
import { BsBookmark } from "react-icons/bs";
import { useFindPublicationByPostId } from "../../hooks/useFindPublicationbyPostId";
import { PostProps } from "../../types";

function PostHeader({ post }: PostProps) {
  const publicationName = useFindPublicationByPostId(post.publicationId);

  return (
    <Card.Text className='mb-0'>
      <BsBookmark /> firstname lastname in {publicationName}
    </Card.Text>
  );
}

export default PostHeader;
