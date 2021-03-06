import React, { lazy } from "react";
import PostsHead from "../../components/posts-head";
import PostsHero from "../../components/posts-hero";
import Row from "../../components/row";
import SideBar from "../../components/side-bar";
import Trending from "../../components/trending";

const PostList = lazy(() => import("../../components/post-list"));

function PostsPage() {
  return (
    <>
      <PostsHead />

      <PostsHero />

      <Trending />

      <Row>
        <PostList />
        <SideBar />
      </Row>
    </>
  );
}

export default PostsPage;
