import React from "react";
import PostList from "../../components/post-list";
import { usePostsPage } from "./usePostsPage";

function PostsPage() {
  usePostsPage();

  return (
    <>
      <PostList />
    </>
  );
}

export default PostsPage;
