import React from "react";
import { Button } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";
import { useSelector } from "../../hooks/useSelector";
import Publication from "../../shared/publication";
import { publicationSelectors } from "../../store";
import { IPublication } from "../../store/publications/types";

function TopicsYouFollow() {
  const { publications, loading, error } = useSelector(publicationSelectors);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!publications) {
    return null;
  }

  const renderPublications = () => {
    return publications.map((publication: IPublication) => {
      return (
        <Publication
          key={`topics-you-follow-${publication._id}`}
          label={publication.name}
        />
      );
    });
  };

  return (
    <div>
      <p className="text-uppercase font-weight-bold mb-2">Topics you follow</p>
      <div className="d-flex flex-wrap">
        {renderPublications()}
        <Button variant="light" size="sm" className="p-2 h-50">
          <BsPlus />
        </Button>
      </div>
    </div>
  );
}

export default TopicsYouFollow;
