import React from "react";
import { Card } from "react-bootstrap";
import { BsBookmarks } from "react-icons/bs";
import { useSidebar } from "./useSidebar";

function SideBar() {
  const { renderPosts } = useSidebar();

  return (
    <Card className="w-50 h-25">
      <Card.Header className=" font-weight-bold text-uppercase d-flex align-items-center bg-white">
        <BsBookmarks className="mr-2" /> reading list
      </Card.Header>
      <Card.Body className="bg-light">{renderPosts()}</Card.Body>
      <Card.Footer className="text-wrap ">
        <p>Help</p>
        <p>Status</p>
        <p>Writers</p>
        <p>Blog</p>
        <p>Careers</p>
        <p>Privacy</p>
        <p>Terms</p>
        <p>About</p>
      </Card.Footer>
    </Card>
  );
}

export default SideBar;
