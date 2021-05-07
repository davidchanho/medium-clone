import React from "react";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { IPost } from "../../types";
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
        <FaTwitter size="28" />
        <AiFillLinkedin size="28" />
        <AiFillFacebook size="28" />
        <PostOptions {...post} />
      </div>
    </div>
  );
}

export default DetailsHeader;
