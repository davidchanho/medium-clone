import React from "react";
import { Card } from "react-bootstrap";
import { clampText } from "../../helpers/clampText";
import { formatDate } from "../../helpers/formatDate";
import { useGetPost } from "../../hooks/useGetPost";
import { PostProps } from "../../types";

function Post({ post }: PostProps) {
  const { onGetPost } = useGetPost(post);

  return (
    <Card
      className="d-flex flex-column bg-inherit pointer mb-2"
      onClick={onGetPost}
    >
      <Card.Text className="d-flex align-items-center mb-1">
        <img
          src={post?.publication?.icon}
          alt={post?.publication?.name}
          className="mr-2 mt-1 rounded-circle"
          width="20"
          height="20"
        />{" "}
        {post?.user?.name} in {post?.publication?.name}
      </Card.Text>
      <Card.Title className="text-capitalize mb-1">{post?.title}</Card.Title>
      <Card.Text className="text-secondary">
        <p>{post?.excerpt ? clampText(post?.body, post?.excerpt) : ""}</p>
        <p>
          {post?.date && formatDate(post?.date)} &middot; {post?.readingTime}
        </p>
      </Card.Text>
    </Card>
  );
}

export default Post;
