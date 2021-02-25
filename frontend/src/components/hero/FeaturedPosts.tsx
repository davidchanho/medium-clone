import React from "react";
import { CardDeck } from "react-bootstrap";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";
import FeaturedPost from "./FeaturedPost";

function FeaturedPosts() {
  const { featured, loading, error } = useSelector(postSelectors);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!featured) {
    return null;
  }

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
