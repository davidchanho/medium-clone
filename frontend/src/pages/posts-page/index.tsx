import React from "react";
import { Helmet } from "react-helmet";
import Trending from "../../components/trending";
import TrendingList from "../../components/trending/TrendingList";
import { useFetchPosts } from "../../hooks/useFetchPosts";
import { useSelector } from "../../hooks/useSelector";
import { postSelectors } from "../../store";

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

      <Trending />

      {/* <div>
        <SideBar />
        <PostList />
      </div> */}
    </>
  );
}

export default PostsPage;
