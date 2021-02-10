import React from "react";
import { useSelector } from "react-redux";
import { shuffle } from "../../helpers/shuffle";
import { postSelectors } from "../../store/posts/selectors";
import PostListItem from "./PostListItem";
import PostsSkeleton from "../../shared/post/PostsSkeleton";

export const usePostList = () => {
  const { posts, loading, error } = useSelector(postSelectors);

  const renderPosts = () => {
    if (loading) {
      return <PostsSkeleton amount={4} />;
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
