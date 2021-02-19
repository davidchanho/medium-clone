import React, { FC } from "react";
import { Card } from "react-bootstrap";

interface PostContainerProps {
  onClick: () => void;
}

const PostContainer: FC<PostContainerProps> = ({ children, onClick }) => {
  return (
    <Card
      className="d-flex flex-column bg-inherit pointer mb-2"
      onClick={onClick}
    >
      {children}
    </Card>
  );
};

export default PostContainer;
