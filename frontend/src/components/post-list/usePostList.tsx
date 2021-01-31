import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { postSelectors } from "../../store";
import Post from "../post";

export const usePostList = () => {
  const { fetchPosts } = useActions();
  const { posts, loading, error } = useSelector(postSelectors);

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderPosts = () => {
    if (loading) {
      return <h2>Loading...</h2>;
    }

    if (error) {
      return <h2>{error}</h2>;
    }

    return posts?.map((post) => <Post post={post} />);
  };

  return { renderPosts };
};
