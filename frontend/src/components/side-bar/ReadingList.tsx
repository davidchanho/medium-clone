import React from "react";
import { Card } from "react-bootstrap";
import { BsBookmarks } from "react-icons/bs";
import { useSidebar } from "./useSidebar";

function ReadingList() {
  const { renderPosts } = useSidebar();

  return (
    <Card>
      <Card.Header className="font-weight-bold text-uppercase d-flex align-items-center">
        <BsBookmarks className="mr-2" /> reading list
      </Card.Header>
      <Card.Body className="bg-light pt-1">
        {renderPosts()}
        <small className="text-success text-capitalize">
          see your full reading list
        </small>
      </Card.Body>
    </Card>
  );
}

export default ReadingList;
