import React, { FC } from "react";
import { Card } from "react-bootstrap";
import { PostContainerProps } from "./types";


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
