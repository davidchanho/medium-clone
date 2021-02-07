import React from "react";
import Hero from "../../components/hero";
import PostList from "../../components/post-list";
import SideBar from "../../components/side-bar";
import TrendingPosts from "../../components/trending-posts";
import { usePostsPage } from "./usePostsPage";

function PostsPage() {
  usePostsPage();

  return (
    <>
      <Hero />
      <TrendingPosts />
      <div className="d-flex">
        <PostList />
        <SideBar />
      </div>
    </>
  );
}

export default PostsPage;
