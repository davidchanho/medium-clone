import React, { useState } from "react";
import { IconClap } from "../../../../components/icons";

function Clap() {
  const [claps, setClaps] = useState<number>(0);

  const incrementClap = () => {
    setClaps(claps + 1);
  };

  return (
    <div>
      <IconClap onClick={incrementClap} />
      {claps}
    </div>
  );
}

export default Clap;
