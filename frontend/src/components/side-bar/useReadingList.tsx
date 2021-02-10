import React from "react";
import { useSelector } from "react-redux";
import { shuffle } from "../../helpers/shuffle";
import { postSelectors } from "../../store/posts/selectors";
import Post from "../../shared/post";

export const useReadingList = () => {
  const { posts, loading, error } = useSelector(postSelectors);

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

    return shuffle(posts)
      .slice(0, 5)
      .map((post) => <Post key={`post-${post._id}`} post={post} className='mb-3'/>);
  };

  return { renderPosts };
};
