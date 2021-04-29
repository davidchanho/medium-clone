import React from "react";
import { clampText } from "../../helpers/clampText";
import { formatDate } from "../../helpers/formatDate";
import { IPost } from "../../types";
import PostOptions from "../post-options";

function Post({ ...post }: IPost) {
  const { publication, user, title, body, excerpt, readingTime, date } = post;

  return (
    <div>
      <div className="d-flex align-items-center">
        <img
          src={publication?.icon}
          alt={publication?.name}
          className="mr-2 mt-1 rounded-circle"
          width="20"
          height="20"
        />{" "}
        <p>
          {user?.name} in {publication?.name}
        </p>
      </div>
      <div className="text-secondary d-flex flex-column">
        <h5 className="text-capitalize mb-1">{title}</h5>
        <p>{excerpt ? clampText(body, excerpt) : ""}</p>
        <div className="d-flex align-items-center justify-content-between">
          <p>
            {formatDate(date)} &middot; {readingTime}
          </p>
          <PostOptions {...post} />
        </div>
      </div>
    </div>
  );
}

export default Post;
