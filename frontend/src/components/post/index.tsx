import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { clampText } from "../../helpers/clampText";
import { formatDate } from "../../helpers/formatDate";
import { PostProps } from "../../types";

function Post({ post }: PostProps) {
  return (
    <NavLink to={`/${post?._id}`}>
      <Card className="d-flex flex-column bg-inherit pointer mb-2">
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
          <p className='hide-mobile'>{post?.excerpt ? clampText(post?.body, post?.excerpt) : ""}</p>
          <p>
            {post?.date && formatDate(post?.date)} &middot; {post?.readingTime}
          </p>
        </Card.Text>
      </Card>
    </NavLink>
  );
}

export default Post;
