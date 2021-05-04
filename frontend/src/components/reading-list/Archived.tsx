import React from "react";
import { IconArchive } from "../icons";

function Archived() {
  return (
    <div>
      <div>
        <img src="/archived.png" alt="" />
      </div>
      <div>
        <p>
          After you're finished with a saved story, tap the <IconArchive /> icon
          to store it here.
        </p>
        <button>Stories worth saving</button>
      </div>
    </div>
  );
}

export default Archived;
