import React from "react";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";
import Post from "../post";

export const usePostList = () => {
  const {
    publication: { posts },
    loading,
    error,
  } = useSelector(postSelectors);

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

    return posts.map((post) => <Post key={`post-${post._id}`} post={post} />);
  };

  return { renderPosts };
};
