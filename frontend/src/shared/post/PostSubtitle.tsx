import React from "react";
import Card from "react-bootstrap/esm/Card";
import { clampText } from "../../helpers/clampText";
import { PostProps } from "../../store/posts/types";

function PostSubtitle({ post, className }: PostProps) {
  const renderSubtitle = clampText(post.body, 50);

  if(!post) {
    return null
  }

  return (
    <Card.Subtitle className={`text-capitalize text-secondary ${className}`}>
      {renderSubtitle}
    </Card.Subtitle>
  );
}

export default PostSubtitle;
