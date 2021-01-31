import React from "react";
import PostForm from "../../components/post-form";
import PostList from "../../components/post-list";

function PostsPage() {
  return (
    <div>
      <PostList />
      <PostForm />
    </div>
  );
}

export default PostsPage;
