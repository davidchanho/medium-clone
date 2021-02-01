import React from "react";
import PostList from "../../components/post-list";
import PublicationsBar from "../../components/publications-bar";
import { usePostsPage } from "./usePostsPage";

function PostsPage() {
  usePostsPage();

  return (
    <>
      <PublicationsBar />
      <PostList />
    </>
  );
}

export default PostsPage;
