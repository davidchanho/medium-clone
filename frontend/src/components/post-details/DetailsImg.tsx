import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { PostProps } from "../../types";

function DetailsImg({ post }: PostProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <img
        src={post?.image}
        alt={post?.title}
        onClick={toggleOpen}
        className="w-100 pointer"
      />

      <Modal show={isOpen} size="xl">
        <Modal.Body className="p-0">
          <img
            className="w-100 pointer"
            src={post?.image}
            alt={post?.title}
            onClick={toggleOpen}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DetailsImg;
