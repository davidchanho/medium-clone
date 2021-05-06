import React, { useState } from "react";
import { IconClose } from "../../../../components/icons";
import Modal from "../../../../components/modal";
import { IPost } from "../../../../types";

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
