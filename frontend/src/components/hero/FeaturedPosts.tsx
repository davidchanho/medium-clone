import React from "react";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";
import FeaturedPost from "./FeaturedPost";

function FeaturedPosts() {
  const { featured } = useSelector(postSelectors);

  return (
    <div>
      {featured.map((post) => (
        <FeaturedPost key={`featured-${post._id}`} {...post} />
      ))}
    </div>
  );
}

export default FeaturedPosts;
