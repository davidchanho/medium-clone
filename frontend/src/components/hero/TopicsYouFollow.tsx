import React from "react";
import { Button } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";
import { useSelector } from "../../hooks/useSelector";
import Publication from "../../shared/publication";
import { publicationSelectors } from "../../store";
import { IPublication } from "../../store/publications/types";

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
        <Button variant="light">
          <BsPlus />
        </Button>
      </div>
    </div>
  );
}

export default TopicsYouFollow;
