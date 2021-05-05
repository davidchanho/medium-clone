import React from "react";
import { useFetchPosts } from "../../hooks/useFetchPosts";
import Hero from "./components/hero";
import PostList from "./components/post-list";
import PostsHead from "./components/posts-head";
import SideBar from "./components/side-bar";
import Trending from "./components/trending";

function PostsPage() {
  useFetchPosts();

  return (
    <>
      <PostsHead />

      <Hero />

      <Trending />

      <div>
        <SideBar />
        <PostList />
      </div>
    </>
  );
}

export default PostsPage;
