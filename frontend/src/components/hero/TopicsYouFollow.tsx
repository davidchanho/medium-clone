import React from "react";
import { useSelector } from "../../hooks/useSelector";
import Publication from "../../shared/publication";
import { publicationSelectors } from "../../store";
import { IPublication } from "../../types";

function TopicsYouFollow() {
  const { publications } = useSelector(publicationSelectors);

  return (
    <div>
      <p className="text-uppercase font-weight-bold mb-2">Topics you follow</p>
      <div className="d-flex flex-wrap">
        {publications.map((publication: IPublication) => {
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
