import React, { useEffect } from "react";
import PostList from "../../components/post-list";
import { useActions } from "../../hooks/useActions";

function PostsPage() {
  const { fetchPosts } = useActions();

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <PostList />
    </>
  );
}

export default PostsPage;
