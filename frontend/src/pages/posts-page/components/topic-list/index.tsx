import React from "react";
import { useSelector } from "../../../../hooks/useSelector";
import { topicSelectors } from "../../../../store";
import Topic from "./Topic";

function TopicList() {
  const { topics } = useSelector(topicSelectors);

  return (
    <>
      {topics.slice(0, 3).map((topic) => (
        <Topic key={`topics-${topic._id}`} name={topic.name} />
      ))}
    </>
  );
}

export default TopicList;
