import React from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { commentSelectors, postSelectors } from "../../store";

export const usePostDetails = () => {
  const { post, loading, error } = useSelector(postSelectors);
  const { comments } = useSelector(commentSelectors);

  const {getComments} = useActions()

  React.useEffect(() => {
    getComments()
  }, [])

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
