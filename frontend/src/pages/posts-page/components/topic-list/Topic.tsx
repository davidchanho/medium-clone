import React from "react";
import { ITopic } from "../../../../types";

function Topic({ name }: ITopic) {
  return (
    <li>
      {name} <button>Follow</button>
    </li>
  );
}

export default Topic;
