import React from "react";
import { NavLink } from "react-router-dom";
import FooterNav from "../footer-nav";
import styles from "./index.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <section className={styles.section}>
        <article className={styles.article}>
          <NavLink className={styles.header} to="#">
            Learn More.
          </NavLink>
          <p>
            Medium is an open platform where 170 million readers come to find
            insightful and dynamic thinking. Here, expert and undiscovered
            voices alike dive into the heart of any topic and bring new ideas to
            the surface.{" "}
            <NavLink className={styles.link} to="#">
              Learn more
            </NavLink>
          </p>
        </article>
        <article className={styles.article}>
          <NavLink className={styles.header} to="#">
            Make Medium yours.
          </NavLink>
          <p>
            Follow the writers, publications, and topics that matter to you, and
            you’ll see them on your homepage and in your inbox.{" "}
            <NavLink className={styles.link} to="#">
              Explore
            </NavLink>
          </p>
        </article>
        <article className={styles.article}>
          <NavLink className={styles.header} to="#">
            Share your thinking.
          </NavLink>
          <p>
            If you have a story to tell, knowledge to share, or a perspective to
            offer — welcome home. It’s easy and free to post your thinking on
            any topic.{" "}
            <NavLink className={styles.link} to="#">
              Write on Medium
            </NavLink>
          </p>
        </article>
      </section>
      <FooterNav />
    </div>
  );
}

export default Footer;
