import React from "react";
import { useGetPost } from "../../hooks/useGetPost";
import { PostProps } from "../../store/posts/types";
import PostContainer from "./PostContainer";
import PostDate from "./PostDate";
import PostHeader from "./PostHeader";
import PostTitle from "./PostTitle";

function Post({ post }: PostProps) {
  const { onGetPost } = useGetPost(post);

  return (
    <PostContainer onClick={onGetPost}>
      <PostHeader post={post} />
      <PostTitle post={post} />
      <PostDate post={post} />
    </PostContainer>
  );
}

export default Post;
