import faker from "faker";
import React from "react";
import { Button } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";
import Topic from "../topic";

const topics = [
  faker.lorem.word(5),
  faker.lorem.word(5),
  faker.lorem.word(5),
  faker.lorem.word(5),
  faker.lorem.word(5),
  faker.lorem.word(5),
];

function TopicsYouFollow() {
  const renderTopics = () => {
    return topics.map((topic: string) => {
      return <Topic key={`topics-you-follow-${topic}`} label={topic} />;
    });
  };

  return (
    <div>
      <p className="text-uppercase font-weight-bold mb-2">Topics you follow</p>
      <div className="d-flex flex-wrap">
        {renderTopics()}
        <Button variant="light" size="sm" className="p-2 h-50">
          <BsPlus />
        </Button>
      </div>
    </div>
  );
}

export default TopicsYouFollow;
