import React from "react";
import PostHero from "../../components/post-hero";
import PostList from "../../components/post-list";
import { usePostsPage } from "./usePostsPage";

function PostsPage() {
  usePostsPage();

  return (
    <>
      <PostHero />
      <PostList />
    </>
  );
}

export default PostsPage;
