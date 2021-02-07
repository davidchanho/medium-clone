import React from "react";
import { useSelector } from "react-redux";
import { shuffle } from "../../helpers/shuffle";
import { postSelectors } from "../../store";
import PostListItem from "./PostListItem";

export const usePostList = () => {
  const { posts, loading, error } = useSelector(postSelectors);

  const renderPosts = () => {
    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <h2>{error}</h2>;
    }

    if (!posts) {
      return null;
    }

    return shuffle(posts).map((post) => (
      <PostListItem key={`post-${post._id}`} post={post} />
    ));
  };

  return { renderPosts };
};
