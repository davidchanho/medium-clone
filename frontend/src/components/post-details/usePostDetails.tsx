import React from "react";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store/posts/selectors";

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
      <article>
        <img src={post.image} />
        <h3>{post.title}</h3>
        <p> {post.body}</p>
      </article>
    );
  };

  return { renderPost };
};
