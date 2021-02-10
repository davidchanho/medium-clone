import React from "react";
import { ListGroupItem } from "react-bootstrap";
import { useActions } from "../../hooks/useActions";
import { PublicationItemProps } from "./types";

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
