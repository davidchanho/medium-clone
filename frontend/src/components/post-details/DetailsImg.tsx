import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { IPost } from "../../types";

function DetailsImg({ title, image }: IPost) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <img src={image} alt={title} onClick={toggleOpen} className="w-100 pointer" />

      <Modal show={isOpen} size="xl">
        <Modal.Body className="p-0">
          <img
            className="w-100 pointer"
            src={image}
            alt={title}
            onClick={toggleOpen}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DetailsImg;
