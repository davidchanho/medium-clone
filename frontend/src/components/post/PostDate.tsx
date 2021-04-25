import React from "react";
import { Card } from "react-bootstrap";
import { formatDate } from "../../helpers/formatDate";
import { IPost } from "../../types";

function PostDate({ date, readingTime }: IPost) {
  return (
    <Card.Text className="text-secondary">
      {formatDate(date)} &middot; {readingTime}
    </Card.Text>
  );
}

export default PostDate;
