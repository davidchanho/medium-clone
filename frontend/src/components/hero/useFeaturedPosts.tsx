import { shuffle } from "lodash";
import React from "react";
import { useSelector } from "../../hooks/useSelector";
import { postSelectors } from "../../store/posts/selectors";
import FeaturedPost from "./FeaturedPost";

export const useFeaturedPosts = () => {
  const { posts, loading, error } = useSelector(postSelectors);

  const renderPosts = () => {
    if (loading) {
      return <h2>Loading...</h2>;
    }

    if (error) {
      return <h2>{error}</h2>;
    }
    
    if (!posts) {
      return null;
    }

    return (
      <>
        {shuffle(posts)
          .slice(0, 4)
          .map((post) => (
            <FeaturedPost key={`featured-${post._id}`} post={post} />
          ))}
      </>
    );
  };

  return { renderPosts };
};
