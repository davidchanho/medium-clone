import React from "react";
import { CardDeck } from "react-bootstrap";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";
import PostsSkeleton from "../post/PostsSkeleton";
import PostListItem from "./PostListItem";

function PostList() {
  const { posts, loading, error } = useSelector(postSelectors);

  const renderPosts = () => {
    return posts.map((post) => (
      <PostListItem key={`post-${post._id}`} post={post} />
    ));
  };

  return (
    <CardDeck className="w-100 d-flex flex-column pt-5">
      {renderPosts()}
    </CardDeck>
  );
}

export default PostList;
