import React from "react";
import { BiMessage } from "react-icons/bi";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";

function Comments() {
  const { post } = useSelector(postSelectors);

  return (
    <>
      <div>
        <BiMessage /> {post?.comments?.length}
      </div>

      <div>
        <div>Responses</div>
        <div></div>
      </div>
    </>
  );
}

export default Comments;
