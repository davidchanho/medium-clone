import React from "react";
import { IPost } from "../../types";
import { IconFacebook, IconLinkedin, IconTwitter } from "../icons";
import PostOptions from "../post-options";

function DetailsHeader({ ...post }: IPost) {
  return (
    <div>
      <div>
        <div>
          <img src={post?.user?.avatar} alt={post?.user?.name} />
        </div>
        <div>
          {post?.user?.name} <button>Follow</button>
        </div>
      </div>

      <div>
        <IconTwitter size="28" />
        <IconLinkedin size="28" />
        <IconFacebook size="28" />
        <PostOptions {...post} />
      </div>
    </div>
  );
}

export default DetailsHeader;
