import React from "react";
import { CardDeck } from "react-bootstrap";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";
import FeaturedPost from "./FeaturedPost";

function FeaturedPosts() {
  const { featured, loading, error } = useSelector(postSelectors);

  const renderPosts = () => {
      return featured.map((post) => (
      <FeaturedPost key={`featured-${post._id}`} post={post} />
    ));
  };

  return (
    <CardDeck className="d-flex flex-column border-right">
      {renderPosts()}
    </CardDeck>
  );
}

export default FeaturedPosts;
