import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { postSelectors } from "../../../../store";
import PostListItem from "../post-list-item";
import PostsSkeleton from "../post/PostsSkeleton";

function PostList() {
  const { posts } = useSelector(postSelectors);

  return (
    <div>
      <Suspense fallback={<PostsSkeleton amount={5} />}>
        {posts.map((post) => (
          <PostListItem key={`post-${post._id}`} {...post} />
        ))}
      </Suspense>
    </div>
  );
}

export default PostList;
