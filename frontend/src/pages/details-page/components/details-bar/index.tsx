import React from "react";
import Bookmark from "../../../../components/bookmark";
import { useSelector } from "../../../../hooks/useSelector";
import { postSelectors } from "../../../../store";
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
