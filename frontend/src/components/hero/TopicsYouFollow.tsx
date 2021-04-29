import React from "react";
import { ListGroup } from "react-bootstrap";
import TopicList from "../topic-list";

function TopicsYouFollow() {
  return (
    <div>
      <p className="text-uppercase font-weight-bold mb-2">Topics you follow</p>
      <ListGroup variant="flush">
        <TopicList />
        
        <a className="text-success pointer" href='#!'>See More</a>
      </ListGroup>
    </div>
  );
}

export default TopicsYouFollow;
