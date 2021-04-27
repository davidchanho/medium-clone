import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import TopicList from "../topic-list";
import { IconPlus } from "../_shared/icons";

function TopicsYouFollow() {
  return (
    <div>
      <p className="text-uppercase font-weight-bold mb-2">Topics you follow</p>
      <ListGroup variant="flush">
        <TopicList />
        <Button variant="light" size="sm" className="p-2 h-50">
          <IconPlus />
        </Button>
      </ListGroup>
    </div>
  );
}

export default TopicsYouFollow;
