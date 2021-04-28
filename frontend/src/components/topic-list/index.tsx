import React from "react";
import Topic from "../topic";

function TopicList() {
  const topics = ["topic1", "topic2", "topic3"];

  return (
    <>
      {topics.map((topic: string) => (
        <Topic key={`topics-you-follow-${topic}`} name={topic} />
      ))}
    </>
  );
}

export default TopicList;
