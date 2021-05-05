import React, { useState } from "react";
import { FaRegHandPaper } from "react-icons/fa";

function Clap() {
  const [claps, setClaps] = useState<number>(0);

  const incrementClap = () => {
    setClaps(claps + 1);
  };

  return (
    <div>
      <FaRegHandPaper onClick={incrementClap} />
      {claps}
    </div>
  );
}

export default Clap;
