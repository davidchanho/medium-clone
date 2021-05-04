import React from "react";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";
import PostsSkeleton from "../post/PostsSkeleton";
import PostListItem from "./PostListItem";

function PostList() {
  const { posts, loading, error } = useSelector(postSelectors);

  const renderPosts = () => {
    if (loading) {
      return <PostsSkeleton amount={5} />;
    }
    if (error) {
      return <div>error</div>;
    }
    return posts.map((post) => (
      <PostListItem key={`post-${post._id}`} {...post} />
    ));
  };

  return <div>{renderPosts()}</div>;
}

export default PostList;
