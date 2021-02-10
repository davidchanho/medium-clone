import React from "react";
import { Card } from "react-bootstrap";
import { formatDate } from "../../helpers/formatDate";
import { PostProps } from "../../store/posts/types";

function PostDate({ post }: PostProps) {
  const date = formatDate(post.date);
  
  return (
    <Card.Text className="text-secondary">
      {date} &middot; {post.readingTime}
    </Card.Text>
  );
}

export default PostDate;
