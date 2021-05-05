import React, { useState } from "react";
import { IPost } from "../../../../types";

function DetailsImg({ title, image }: IPost) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <img src={image} alt={title} onClick={toggleOpen} />

      <div>
        <div>
          <img src={image} alt={title} onClick={toggleOpen} />
        </div>
      </div>
    </>
  );
}

export default DetailsImg;
