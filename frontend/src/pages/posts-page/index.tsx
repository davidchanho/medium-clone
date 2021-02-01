import React, { useEffect } from "react";
import PostForm from "../../components/post-form";
import PostList from "../../components/post-list";
import { useActions } from "../../hooks/useActions";

function PostsPage() {
  const { fetchPosts } = useActions();

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <PostList />
      <PostForm />
    </div>
  );
}

export default PostsPage;
