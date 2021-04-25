import React from "react";
import { useGetPost } from "../../hooks/useGetPost";
import { IPost } from "../../types";
import PostContainer from "./PostContainer";
import PostDate from "./PostDate";
import PostHeader from "./PostHeader";
import PostTitle from "./PostTitle";

function Post({ ...post }: IPost) {
  const { onGetPost } = useGetPost(post);

  return (
    <PostContainer onClick={onGetPost}>
      <PostHeader {...post} />
      <PostTitle {...post} />
      <PostDate {...post} />
    </PostContainer>
  );
}

export default Post;
