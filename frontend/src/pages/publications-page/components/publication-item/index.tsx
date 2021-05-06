import React from "react";
import Button from "../../../../components/buttons";
import Row from "../../../../components/row";
import { IPublication } from "../../../../types";

function PublicationItem({ ...publication }: IPublication) {
  return (
    <Row>
      <div>
        <img src={publication.icon} alt="" width={20} height={20} />
        {publication.name}{" "}
      </div>

      <Button>Follow</Button>
    </Row>
  );
}

export default PublicationItem;
