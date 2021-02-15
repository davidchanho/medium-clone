import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { PostProps } from "../../store/posts/types";
import styles from "./DetailsImg.module.scss";

function DetailsImg({ post }: PostProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <img
        src={post.image}
        className={styles.detailsImg}
        onClick={toggleOpen}
      />
        
      <Modal show={isOpen} className={styles.detailsModal}>
        <Modal.Body>
          <img
            src={post.image}
            className={styles.detailsImg}
            onClick={toggleOpen}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DetailsImg;
