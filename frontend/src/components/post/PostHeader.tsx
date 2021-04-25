import React from "react";
import { Card } from "react-bootstrap";
import { IPost } from "../../types";

function PostHeader({ ...post }: IPost) {
  return (
    <Card.Text className="d-flex align-items-end mb-1">
      <img src={post?.publication?.icon} className="mr-1 rounded" />{" "}
      {post?.user?.name} in {post?.publication?.name}
    </Card.Text>
  );
}

export default PostHeader;
