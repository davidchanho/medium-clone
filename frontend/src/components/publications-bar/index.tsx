import React from "react";
import { ListGroupItem } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import { usePublicationsBar } from "./usePublicationsBar";

function PublicationsBar() {
  const { publications, responsive, onGetPublication } = usePublicationsBar();

  return (
    <Carousel ssr responsive={responsive}>
      {publications.map((publication) => {
        return (
          <ListGroupItem
            action
            key={publication._id}
            onClick={() => onGetPublication(publication._id)}
          >
            {publication.name}
          </ListGroupItem>
        );
      })}
    </Carousel>
  );
}

export default PublicationsBar;
