import React from "react";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";
import Post from "../post";

export const usePostList = () => {
  const { posts, loading, error } = useSelector(postSelectors);

  const renderPosts = () => {
    if (loading) {
      return <h2>Loading...</h2>;
    }

    if (error) {
      return <h2>{error}</h2>;
    }

    return posts?.map((post) => <Post key={post._id} post={post} />);
  };

  return { renderPosts };
};
