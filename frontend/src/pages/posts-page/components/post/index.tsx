import React from "react";
import { clampText } from "../../../../helpers/clampText";
import { formatDate } from "../../../../helpers/formatDate";
import { useGetPost } from "../../../../hooks/useGetPost";
import { IPost } from "../../../../types";
import styles from "./index.module.scss";

function Post({ ...post }: IPost) {
  const { onGetPost } = useGetPost(post);

  return (
    <div onClick={onGetPost}>
      <header className={styles.header}>
        <img
          className={styles.icon}
          src={post?.publication?.icon}
          alt={post?.publication?.name}
          width="20"
          height="20"
        />{" "}
        <p>
          {post?.user?.name} in {post?.publication?.name}
        </p>
      </header>
      <div>{post?.title}</div>
      <div>
        {post.excerpt ? clampText(post?.body, post?.excerpt) : ""}
        {formatDate(post?.date)} &middot; {post?.readingTime}
      </div>
    </div>
  );
}

export default Post;
