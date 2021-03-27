import React from "react";
import { Card } from "react-bootstrap";
import { PostProps } from "../../store/posts/types";

function PostHeader({ post, className }: PostProps) {
  return (
    <Card.Text className={`d-flex align-items-end mb-1 ${className}`}>
      <img src={post?.publication?.icon} className="mr-1 rounded" />{" "}
      {post?.user?.name} in {post?.publication?.name}
    </Card.Text>
  );
}

export default PostHeader;
