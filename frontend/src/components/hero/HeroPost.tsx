import React from "react";
import { Card } from "react-bootstrap";
import { PostProps } from "../../store/posts/types";
import PostHeader from "../post/PostHeader";
import PostImg from "../post/PostImg";
import PostSubtitle from "../post/PostSubtitle";
import PostTitle from "../post/PostTitle";

function HeroPost({ post }: PostProps) {
  if (!post) {
    return null;
  }

  return (
    <Card key={`hero-${post._id}`}>
      <div>
        <PostImg post={post} className="mb-2 h-100 w-100" />
        <PostHeader post={post} className="mb-2" />
        <PostTitle post={post} className="mb-2" />
        <PostSubtitle post={post} className="mb-2" />
      </div>
      <div className="text-secondary d-flex">
        Read More &middot; {post.readingTime}
      </div>
    </Card>
  );
}

export default HeroPost;
