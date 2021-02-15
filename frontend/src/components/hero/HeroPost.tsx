import React from "react";
import { Card } from "react-bootstrap";
import PostHeader from "../../shared/post/PostHeader";
import PostImg from "../../shared/post/PostImg";
import PostSubtitle from "../../shared/post/PostSubtitle";
import PostTitle from "../../shared/post/PostTitle";
import { PostProps } from "../../store/posts/types";

function HeroPost({ post }: PostProps) {
  if (!post) {
    return null;
  }

  return (
    <Card key={`hero-${post._id}`}>
      <PostImg post={post} className="mb-2 h-100 w-100" />
      <PostHeader post={post} className="mb-2" />
      <PostTitle post={post} className="mb-2" />
      <PostSubtitle post={post} className="mb-2" />
      <div className="text-secondary d-flex">
        Read More &middot; {post.readingTime}
      </div>
    </Card>
  );
}

export default HeroPost;
