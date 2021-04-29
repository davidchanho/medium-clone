import React from "react";
import { Card } from "react-bootstrap";
import { IPost } from "../../types";
import Post from "../post";
import PostImg from "../post/PostImg";

function FeaturedPost({ ...post }: IPost) {
  return (
    <Card className="d-flex justify-content-between mb-2">
      <Post {...post} />

      <PostImg {...post} height={100} width={100} />
    </Card>
  );
}

export default FeaturedPost;
