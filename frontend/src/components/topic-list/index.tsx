import React from "react";
import { useSelector } from "../../hooks/useSelector";
import { topicSelectors } from "../../store";
import Topic from "../topic";

function TopicList() {
  const { topics } = useSelector(topicSelectors);

  return (
    <>
      {topics.slice(0,3).map((topic) => (
        <Topic key={`topics-you-follow-${topic}`} topic={topic} />
      ))}
    </>
  );
}

export default TopicList;
