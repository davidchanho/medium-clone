import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsBookmarks } from "react-icons/bs";

function SideBar() {
  return (
    <div className="w-100 h-25">
      <Card className="h-75 bg-muted">
        <Card.Header className="font-weight-bold text-uppercase d-flex align-items-center">
          <BsBookmarks className="mr-2" /> reading list
        </Card.Header>
        <Card.Body></Card.Body>
      </Card>
      <ListGroup className="w-100 h-25 d-flex flex-wrap">
        <ListGroupItem className="w-25">Help</ListGroupItem>
        <ListGroupItem className="w-25">Status</ListGroupItem>
        <ListGroupItem className="w-25">Writers</ListGroupItem>
        <ListGroupItem className="w-25">Blog</ListGroupItem>
        <ListGroupItem className="w-25">Careers</ListGroupItem>
        <ListGroupItem className="w-25">Privacy</ListGroupItem>
        <ListGroupItem className="w-25">Terms</ListGroupItem>
        <ListGroupItem className="w-25">About</ListGroupItem>
      </ListGroup>
    </div>
  );
}

export default SideBar;
