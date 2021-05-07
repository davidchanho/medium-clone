import React, { useState } from "react";
import { IPost } from "../../types";
import { IconClose } from "../icons";
import Modal from "../modal";

function DetailsImg({ title, image }: IPost) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const handleOpen = () => setIsOpen(true);

  return (
    <>
      <img src={image} alt={title} onClick={handleOpen} />

      {isOpen && (
        <Modal>
          <img src={image} alt={title} />
          <IconClose onClick={handleClose} />
        </Modal>
      )}
    </>
  );
}

export default DetailsImg;
