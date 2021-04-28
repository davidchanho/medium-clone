import React from "react";
import { Button, Card } from "react-bootstrap";
import { IconArchive } from "../icons";

function Archived() {
  return (
    <Card className="d-flex flex-row">
      <Card.Header>
        <img src="/archived.png" alt="" />
      </Card.Header>
      <Card.Body className="d-flex flex-column">
        <p>
          After you're finished with a saved story, tap the <IconArchive /> icon
          to store it here.
        </p>
        <Button>Stories worth saving</Button>
      </Card.Body>
    </Card>
  );
}

export default Archived;
