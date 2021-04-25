import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import Topic from "../topic";
import { IconPlus } from "../_shared/icons";

const topics = ["topic12", "topic22", "topic32"];

function TopicsYouFollow() {
  const renderTopics = () => {
    return topics.map((topic: string) => {
      return <Topic key={`topics-you-follow-${topic}`} label={topic} />;
    });
  };

  return (
    <div>
      <p className="text-uppercase font-weight-bold mb-2">Topics you follow</p>
      <ListGroup variant="flush">
        {renderTopics()}
        <Button variant="light" size="sm" className="p-2 h-50">
          <IconPlus />
        </Button>
      </ListGroup>
    </div>
  );
}

export default TopicsYouFollow;
