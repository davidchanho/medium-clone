import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../../components/hero";
import PostList from "../../components/post-list";
import SideBar from "../../components/side-bar";
import TrendingPosts from "../../components/trending-posts";
import { useFetchPosts } from "../../hooks/useFetchPosts";

function PostsPage() {
  useFetchPosts();

  return (
    <>
      <Helmet>
        <title>React Medium</title>
        <meta name="description" content="React Medium" />
        <link rel="icon" type="image/svg+xml" href="/mediumMobile.svg" />
      </Helmet>

      {/* <Hero /> */}

      {/* <TrendingPosts /> */}

      {/* <div>
        <SideBar />
        <PostList />
      </div> */}
    </>
  );
}

export default PostsPage;
