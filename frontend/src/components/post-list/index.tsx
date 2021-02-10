import { shuffle } from "lodash";
import React from "react";
import { CardDeck } from "react-bootstrap";
import { useSelector } from "react-redux";
import PostsSkeleton from "../../shared/post/PostsSkeleton";
import { postSelectors } from "../../store";
import PostListItem from "./PostListItem";

function PostList() {
  const { posts, loading, error } = useSelector(postSelectors);

  if (loading) {
    return <PostsSkeleton amount={4} />;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!posts) {
    return null;
  }

  const renderPosts = () => {
    return (
      shuffle(posts).map((post) => (
        <PostListItem key={`post-${post._id}`} post={post} />
      ))
    )
  }

  return (
    <CardDeck className="w-100 d-flex flex-column pt-5">
      {renderPosts()}
    </CardDeck>
  );
}

export default PostList;
