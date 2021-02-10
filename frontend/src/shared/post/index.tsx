import React from "react";
import { PostProps } from "../../store/posts/types";
import PostContainer from "./PostContainer";
import PostDate from "./PostDate";
import PostHeader from "./PostHeader";
import PostTitle from "./PostTitle";
import { usePost } from "./usePost";

function Post({ post }: PostProps) {
  const { onGetPost } = usePost(post);

  return (
    <PostContainer onClick={onGetPost}>
      <PostHeader post={post} />
      <PostTitle post={post} />
      <PostDate post={post} />
    </PostContainer>
  );
}

export default Post;
