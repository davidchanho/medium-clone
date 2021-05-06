import React from "react";
import styles from "./index.module.scss";

function DetailsCover() {
  return (
    <div className={styles.cover}>
      <h1>
        How to read this story from Tim Denning — and everything else on Medium.
      </h1>
      <p>
        You’ve read all your free member-only stories. Become a member to get
        unlimited access and support the voices you want to hear more from.
      </p>
      <button>Upgrade</button>
      <p>
        <b>Read any story.</b> Access everything on Medium across all your
        devices with no limits or ads.{" "}
      </p>
      <p>
        <b>Reward great writing.</b> A portion of your membership fee will go
        toward the writers you read most.
      </p>
    </div>
  );
}

export default DetailsCover;
