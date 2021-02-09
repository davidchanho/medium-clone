import React from "react";
import { Card } from "react-bootstrap";
import { BsBookmarks } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useReadingList } from "./useReadingList";

function ReadingList() {
  const { renderPosts } = useReadingList();

  return (
    <Card className="mb-4">
      <Card.Header className="font-weight-bold text-uppercase d-flex align-items-center">
        <BsBookmarks className="mr-2" /> reading list
      </Card.Header>
      <Card.Body className="bg-light pt-1">
        {renderPosts()}
        <NavLink to="/reading-list" className="text-success text-decoration-none">
       See your full reading list
        </NavLink>
      </Card.Body>
    </Card>
  );
}

export default ReadingList;
