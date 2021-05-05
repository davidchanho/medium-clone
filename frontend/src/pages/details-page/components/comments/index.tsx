import React from "react";
import { useSelector } from "react-redux";
import { IconMessage } from "../../../../components/icons";
import { postSelectors } from "../../../../store";

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
