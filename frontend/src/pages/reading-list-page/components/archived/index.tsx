import React from "react";
import { BsArchive } from "react-icons/bs";
import img from "./archived.png";

function Archived() {
  return (
    <div>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <p>
          After you're finished with a saved story, tap the <BsArchive /> icon
          to store it here.
        </p>
        <button>Stories worth saving</button>
      </div>
    </div>
  );
}

export default Archived;
