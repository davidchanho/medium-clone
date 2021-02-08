import React from "react";
import { useSelector } from "../../hooks/useSelector";
import { publicationSelectors } from "../../store";
import Topic from "./Topic";

function TopicsYouFollow() {
  const { publications } = useSelector(publicationSelectors);

  return (
    <div>
      <p className="text-uppercase font-weight-bold">Topics you follow</p>
      <div className="d-flex flex-wrap">
        {publications.map((publication) => {
          return (
            <Topic
              key={`topics-you-follow-${publication._id}`}
              publication={publication}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TopicsYouFollow;
