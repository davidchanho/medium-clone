import React from "react";
import { Card } from "react-bootstrap";
import { BsBookmarks } from "react-icons/bs";
import { usePostHero } from "../post-hero/usePostHero";

function SideBar() {
  const { renderPosts } = usePostHero();

  return (
    <div className="w-100 h-25">
      <Card className="bg-muted">
        <Card.Header className="font-weight-bold text-uppercase d-flex align-items-center">
          <BsBookmarks className="mr-2" /> reading list
        </Card.Header>
        <Card.Body>{renderPosts()}</Card.Body>
      </Card>
    </div>
  );
}

export default SideBar;
