import React from "react";
import { useSelector } from "../../hooks/useSelector";
import { postSelectors } from "../../store";
import Bookmark from "../_shared/bookmark";
import Clap from "../clap";
import Comments from "../comments";

function DetailsBar() {
  const { post } = useSelector(postSelectors);

  return (
    <div>
      <div>
        <p>{post?.publication?.name}</p>
        <button>Follow</button>
      </div>{" "}
      <div />
      <div>
        <Clap />
        <Comments />
        <Bookmark />
      </div>
    </div>
  );
}

export default DetailsBar;
