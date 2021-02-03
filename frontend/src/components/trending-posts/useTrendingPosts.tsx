import React from "react";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";
import Post from "../post";

export const useTrendingPosts = () => {
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

    return posts.slice(0, 6).map((post, index) => (
      <div className="d-flex">
        <h3 className="text-muted mr-2">0{index + 1}</h3>
        <Post key={`post-${post._id}`} post={post} />
      </div>
    ));
  };

  return { renderPosts };
};
