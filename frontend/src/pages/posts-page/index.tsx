import React, { lazy } from "react";
import Row from "../../components/row";
import { useFetchPosts } from "../../hooks/useFetchPosts";
import PostsHead from "./components/posts-head";
import PostsHero from "./components/posts-hero";
import SideBar from "./components/side-bar";
import Trending from "./components/trending";

const PostList = lazy(() => import("./components/post-list"));

function PostsPage() {
  useFetchPosts();

  return (
    <div>
      <PostsHead />

      <PostsHero />

      <Trending />

      <Row>
        <PostList />
        <SideBar />
      </Row>
    </div>
  );
}

export default PostsPage;
