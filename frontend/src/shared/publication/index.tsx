import React from "react";
import { Button } from "react-bootstrap";
import { PublicationProps } from "../../store/publications/types";

function Publication({ label }: PublicationProps) {
  return (
    <Button variant="light" className="mr-2 mb-2">
      {label}
    </Button>
  );
}

export default Publication;