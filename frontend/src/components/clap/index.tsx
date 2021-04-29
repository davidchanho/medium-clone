import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { IconClap } from "../icons";

function Clap() {
  const [claps, setClaps] = useState<number>(0);

  const incrementClap = () => {
    setClaps(claps + 1);
  };

  return (
    <ListGroup.Item className="d-flex align-items-center border-0">
      <IconClap onClick={incrementClap} className="mr-3" />
      {claps}
    </ListGroup.Item>
  );
}

export default Clap;
