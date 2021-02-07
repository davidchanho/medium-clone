import React from "react";
import { Button, Card } from "react-bootstrap";
import { BsArchive } from "react-icons/bs";
import archived from "../../asset/archived.png";

function Archived() {
  return (
    <Card className="d-flex flex-row">
      <Card.Header>
        <img src={archived} />
      </Card.Header>
      <Card.Body className="d-flex flex-column">
        <p>
          After you're finished with a saved story, tap the <BsArchive /> icon
          to store it here.
        </p>
        <Button>Stories worth saving</Button>
      </Card.Body>
    </Card>
  );
}

export default Archived;
