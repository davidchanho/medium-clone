import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import styles from "./Search.module.scss";

function Search() {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  return (
    <form className={styles.form}>
      <BsSearch onClick={toggleShow} size={25} />{" "}
      <input className={styles.input} placeholder="Search Medium" />
    </form>
  );
}

export default Search;
