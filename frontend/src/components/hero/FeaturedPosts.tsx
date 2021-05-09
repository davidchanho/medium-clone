import React from "react";
import { CardDeck } from "react-bootstrap";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";
import FeaturedPost from "./FeaturedPost";

function FeaturedPosts() {
  const { featured } = useSelector(postSelectors);

  return (
    <CardDeck className="d-flex flex-column border-right">
      {featured.map((post) => (
        <FeaturedPost key={`featured-${post._id}`} post={post} />
      ))}
    </CardDeck>
  );
}

export default FeaturedPosts;
