import React from "react";
import { ListGroupItem } from "react-bootstrap";
import { useActions } from "../../hooks/useActions";
import { IPublication } from "../../store/publications/types";

interface PublicationItemProps {
  publication: IPublication;
}

function PublicationItem({ publication }: PublicationItemProps) {
  const { getPublication } = useActions();

  const onGetPublication = () => {
    getPublication(publication._id);
  };

  return (
    <ListGroupItem action key={publication._id} onClick={onGetPublication}>
      {publication.name}
    </ListGroupItem>
  );
}

export default PublicationItem;
