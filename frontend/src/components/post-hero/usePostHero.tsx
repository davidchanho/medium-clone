import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";
import Post from "../post";
import PostDate from "../post/PostDate";
import PostHeader from "../post/PostHeader";
import PostImg from "../post/PostImg";
import PostSubtitle from "../post/PostSubtitle";
import PostTitle from "../post/PostTitle";

export const usePostHero = () => {
  const {
    publication: { posts },
    loading,
    error,
  } = useSelector(postSelectors);

  const renderHeroPost = () => {
    if (loading) {
      return <h2>Loading...</h2>;
    }

    if (error) {
      return <h2>{error}</h2>;
    }

    if (!posts) {
      return null;
    }

    return posts.slice(0, 1).map((post) => (
      <Card className="">
        <PostImg post={post} />
        <PostHeader post={post} />
        <PostTitle post={post} />
        <PostSubtitle post={post} />
        <PostDate post={post} />
      </Card>
    ));
  };

  const renderPosts = () => {
    if (loading) {
      return <h2>Loading...</h2>;
    }

    if (error) {
      return <h2>{error}</h2>;
    }

    if (!posts) {
      return null;
    }

    return posts.slice(0, 5).map((post) => (
      <Card className=" d-flex flex-row align-items-center justify-content-between">
        <Post key={`post-${post._id}`} post={post} />
        <PostImg post={post} />
      </Card>
    ));
  };

  return { renderHeroPost, renderPosts };
};
