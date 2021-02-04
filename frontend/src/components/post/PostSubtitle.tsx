import React from "react";
import Card from "react-bootstrap/esm/Card";
import { clampText } from "../../helpers/clampText";
import { PostProps } from "../../types";

function PostSubtitle({ post }: PostProps) {
  const renderSubtitle = clampText(post.body);

  return (
    <Card.Subtitle className="text-capitalize text-secondary">
      {renderSubtitle}
    </Card.Subtitle>
  );
}

export default PostSubtitle;
