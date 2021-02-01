import React from "react";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";

export const usePostDetails = () => {
  const { post, loading, error } = useSelector(postSelectors);

  const renderPost = () => {
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>bummer...</div>;
    }

    if (!post) {
      return null;
    }

    return (
      <>
        {post.title} {post.body}
      </>
    );
  };

  return { renderPost };
};
