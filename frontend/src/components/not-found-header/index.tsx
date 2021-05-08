import React from "react";
import { NavLink } from "react-router-dom";
import img from "../../assets/404.png";
import styles from "./index.module.scss";

function NotFoundHeader() {
  return (
    <header className={styles.header}>
      <section className={styles.title}>
        <p className={styles.page}>PAGE NOT FOUND</p>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Out of nothing, something.</h2>
      </section>

      <img className={styles.img} src={img} alt="" width="303" height="303" />

      <section className={styles.section}>
        <p className={styles.body}>
          You can find (just about) anything on Medium — apparently even a page
          that doesn’t exist. Maybe these stories about finding what you didn’t
          know you were looking for will take you somewhere new?
        </p>
        <NavLink to="/" className={styles.link}>
          Home
        </NavLink>
      </section>
    </header>
  );
}

export default NotFoundHeader;
