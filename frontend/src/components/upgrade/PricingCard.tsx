import React from "react";
import { Card } from "react-bootstrap";
import { PricingCardProps } from "./types";

function PricingCard({freq, price}: PricingCardProps) {
  return (
    <Card border="success" className="border rounded w-50 my-2">
      <Card.Body className="d-flex align-items-center">
        <input type="radio" name="upgrade" id={freq} />
        <div className="ml-2">
          <p>{freq}</p>
          <p>{price}</p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PricingCard;
