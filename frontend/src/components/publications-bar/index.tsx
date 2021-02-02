import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "../../hooks/useSelector";
import { postSelectors } from "../../store";

function PublicationsBar() {
  const { publications } = useSelector(postSelectors);
  const { getPublication } = useActions();

  const onGetPublication = (_id: string) => {
    getPublication(_id);
  };

  return (
    <ListGroup horizontal>
      {publications.map((publication) => {
        return (
          <ListGroupItem
            key={publication._id}
            action
            onClick={() => onGetPublication(publication._id)}
          >
            {publication.name}
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
}

export default PublicationsBar;
