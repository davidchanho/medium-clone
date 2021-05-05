import React from "react";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";
import { IconMessage } from "../_shared/icons";

function Comments() {
  const { post } = useSelector(postSelectors);
  return (
    <>
      <div>
        <IconMessage /> {post?.comments?.length}
      </div>

      <div>
        <div>Responses</div>
        <div></div>
      </div>
    </>
  );
}

export default Comments;
