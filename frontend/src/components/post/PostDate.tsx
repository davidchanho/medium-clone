import React from "react";
import { Card } from "react-bootstrap";
import { formatDate } from "../../helpers/formatDate";
import { PostProps } from "../../types";

function PostDate({ post }: PostProps) {
  return (
    <Card.Text className="text-secondary">
      {formatDate(post.date)} {post.readingTime}
    </Card.Text>
  );
}

export default PostDate;
