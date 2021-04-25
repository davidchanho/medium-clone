import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { IPost } from "../../types";
import styles from "./DetailsImg.module.scss";

function DetailsImg({ image }: IPost) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <img src={image} className={styles.detailsImg} onClick={toggleOpen} />

      <Modal show={isOpen} className={styles.detailsModal}>
        <Modal.Body>
          <img src={image} className={styles.detailsImg} onClick={toggleOpen} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DetailsImg;
