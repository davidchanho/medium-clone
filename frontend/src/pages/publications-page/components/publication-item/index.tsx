import React from "react";
import Button from "../../../../components/button";
import { IPublication } from "../../../../types";
import styles from "./index.module.scss";

function PublicationItem({ ...publication }: IPublication) {
  return (
    <div className={styles.item}>
      <div>
        <img src={publication.icon} alt="" width={20} height={20} />
        {publication.name}{" "}
      </div>

      <Button>Follow</Button>
    </div>
  );
}

export default PublicationItem;
