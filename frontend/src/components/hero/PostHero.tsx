import { shuffle } from "lodash";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";
import { IPost } from "../../types";
import PostHeader from "../post/PostHeader";
import PostImg from "../post/PostImg";
import PostSubtitle from "../post/PostSubtitle";
import PostTitle from "../post/PostTitle";

function PostHero() {
  const { posts, loading, error } = useSelector(postSelectors);
  const [post, setPost] = useState<IPost>();

  useEffect(() => {
    shuffle(posts)
      .slice(0, 1)
      .map((post) => setPost(post));
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!posts) {
    return null;
  }

  if (!post) {
    return null;
  }

  return (
    <Card key={`hero-left-${post._id}`}>
      <PostImg post={post} className="mb-2" />
      <PostHeader post={post} className="mb-2" />
      <PostTitle post={post} className="mb-2" />
      <PostSubtitle post={post} className="mb-2" />
      <div className="text-secondary d-flex">
        <p>Read More</p>
        <div>{post.readingTime}</div>
      </div>
    </Card>
  );
}

export default PostHero;
