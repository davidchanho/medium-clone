import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { PricingCardProps } from "./types";

function PricingCard({ freq, price }: PricingCardProps) {
  const [isHover, setHover] = useState<boolean>(false);

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <Card
      border={isHover ? "success" : ""}
      className="border rounded w-50 my-2"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Card.Body className="d-flex align-items-center">
        <input type="radio" name="upgrade" id={freq} className="mr-2" />
        <div className="ml-2">
          <p>{freq}</p>
          <p>{price}</p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PricingCard;
