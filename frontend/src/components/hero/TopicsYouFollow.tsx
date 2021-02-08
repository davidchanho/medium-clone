import React from "react";
import { useSelector } from "../../hooks/useSelector";
import Publication from "../../shared/publication";
import { publicationSelectors } from "../../store";

function TopicsYouFollow() {
  const { publications } = useSelector(publicationSelectors);

  return (
    <div>
      <p className="text-uppercase font-weight-bold">Topics you follow</p>
      <div className="d-flex flex-wrap">
        {publications.map((publication) => {
          return (
            <Publication
              key={`topics-you-follow-${publication._id}`}
              label={publication.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TopicsYouFollow;
