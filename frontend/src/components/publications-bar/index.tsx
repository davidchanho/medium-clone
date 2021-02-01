import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "../../hooks/useSelector";
import { postSelectors } from "../../store";

function PublicationsBar() {
  const { publications } = useSelector(postSelectors);

  return (
    <ListGroup horizontal>
      {publications.map((publication) => {
        return <ListGroupItem action>{publication.name}</ListGroupItem>;
      })}
    </ListGroup>
  );
}

export default PublicationsBar;
