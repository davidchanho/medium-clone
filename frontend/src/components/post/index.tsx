import React from "react";
import { clampText } from "../../helpers/clampText";
import { formatDate } from "../../helpers/formatDate";
import { useGetPost } from "../../hooks/useGetPost";
import { IPost } from "../../types";
import { Container, Header, Icon } from "./styles";

function Post({ ...post }: IPost) {
  const { onGetPost } = useGetPost(post);

  return (
    <Container onClick={onGetPost}>
      <Header>
        <Icon
          src={post?.publication?.icon}
          alt={post?.publication?.name}
          width="20"
          height="20"
        />{" "}
        <p>
          {post?.user?.name} in {post?.publication?.name}
        </p>
      </Header>
      <div>{post?.title}</div>
      <div>
        {post.excerpt ? clampText(post?.body, post?.excerpt) : ""}
        {formatDate(post?.date)} &middot; {post?.readingTime}
      </div>
    </Container>
  );
}

export default Post;
