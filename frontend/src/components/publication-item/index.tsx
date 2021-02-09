import React from "react";
import { ListGroupItem } from "react-bootstrap";
import { PublicationItemProps } from "./types";
import { usePublicationItem } from "./usePublicationItem";

function PublicationItem({ publication }: PublicationItemProps) {
  const { onGetPublication } = usePublicationItem();

  return (
    <ListGroupItem
      action
      key={publication._id}
      onClick={() => onGetPublication(publication._id)}
    >
      {publication.name}
    </ListGroupItem>
  );
}

export default PublicationItem;
