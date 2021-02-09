import { shuffle } from "lodash";
import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import post from "../../shared/post";
import PostHeader from "../../shared/post/PostHeader";
import PostImg from "../../shared/post/PostImg";
import PostSubtitle from "../../shared/post/PostSubtitle";
import PostTitle from "../../shared/post/PostTitle";
import { postSelectors } from "../../store";

export const useHeroPost = () => {
  const { posts, loading, error } = useSelector(postSelectors);

  const renderHeroPost = () => {
    if (loading) {
      return <h2>Loading...</h2>;
    }

    if (error) {
      return <h2>{error}</h2>;
    }

    if (!posts) {
      return null;
    }

    if (!post) {
      return null;
    }

    return shuffle(posts)
      .slice(0, 1)
      .map((post) => (
        <Card key={`hero-${post._id}`}>
          <PostImg post={post} className="mb-2 h-100" />
          <PostHeader post={post} className="mb-2" />
          <PostTitle post={post} className="mb-2" />
          <PostSubtitle post={post} className="mb-2" />
          <div className="text-secondary d-flex">
            Read More &middot; {post.readingTime}
          </div>
        </Card>
      ));
  };

  return { renderHeroPost };
};
