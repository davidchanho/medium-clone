import React from "react";
import { CardDeck } from "react-bootstrap";
import { useFeaturedPosts } from "./useFeaturedPosts";

function FeaturedPosts() {
  const { renderPosts } = useFeaturedPosts();

  return (
    <CardDeck className="d-flex flex-column border-right">
      {renderPosts()}
    </CardDeck>
  );
}

export default FeaturedPosts;
