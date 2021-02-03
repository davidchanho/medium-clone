import React from "react";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";
import PostListItem from "../post/PostListItem";
import PostListSkeleton from "./PostListSkeleton";

export const usePostList = () => {
  const {
    publication: { posts },
    loading,
    error,
  } = useSelector(postSelectors);

  const renderPosts = () => {
    if (loading) {
      return <PostListSkeleton />;
    }

    if (error) {
      return <h2>{error}</h2>;
    }

    if (!posts) {
      return null;
    }

    return posts.map((post) => (
      <PostListItem key={`post-${post._id}`} post={post} />
    ));
  };

  return { renderPosts };
};
