import React from "react";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";

function PostDetails() {
  const { post, loading, error } = useSelector(postSelectors);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!post) {
    return null;
  }

  return (
    <div className="w-75">
      <article>
        <img src={post.image} />
        <h3>{post.title}</h3>
        <p> {post.body}</p>
      </article>
    </div>
  );
}

export default PostDetails;
