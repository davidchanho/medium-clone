import React, { useState } from "react";
import { FaRegHandPaper } from "react-icons/fa";

function Clap() {
  const [claps, setClaps] = useState<number>(0);

  const incrementClaps = () => {
    setClaps(claps + 1);
  };

  return (
    <div className="d-flex align-items-center">
      <FaRegHandPaper onClick={incrementClaps} className="mr-3" />
      {claps}
    </div>
  );
}

export default Clap;
