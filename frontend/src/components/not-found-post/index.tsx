import React from "react";
import { IPost } from "../../types";
import styles from "./index.module.scss";

function NotFoundPost({ ...post }: IPost) {
  if (!post) {
    return null;
  }

  return (
    <article className={styles.post}>
      <img src={post.image} alt={post.title} className={styles.img} />
      <p className={styles.subtitle}>Applause from the Medium Staff</p>
      <p className={styles.title}>{post.title}</p>
      <div className={styles.user}>
        <img
          src={post.user.avatar}
          alt={post.user.name}
          className={styles.avatar}
        />
        <div className={styles.userInfo}>
          <p className={styles.name}>{post.user.name}</p>
          <div className={styles.date}>
            {post.date} &middot; {post.readingTime} min read
          </div>
        </div>
      </div>
    </article>
  );
}

export default NotFoundPost;
