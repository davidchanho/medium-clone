import React from "react";
import Card from "react-bootstrap/esm/Card";
import { clampText } from "../../helpers/clampText";
import { IPost } from "../../types";

function PostSubtitle({ ...post }: IPost) {
  const renderSubtitle = clampText(post.body, 50);

  return (
    <Card.Subtitle className="text-capitalize text-secondary">
      {renderSubtitle}
    </Card.Subtitle>
  );
}

export default PostSubtitle;
