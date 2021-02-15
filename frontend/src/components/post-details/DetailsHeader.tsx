import React from "react";
import { Button } from "react-bootstrap";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import Bookmark from "../../shared/bookmark";
import PostDate from "../../shared/post/PostDate";
import { PostProps } from "../../store/posts/types";

function DetailsHeader({ post }: PostProps) {
  return (
    <div className="d-flex align-items-center justify-content-between flex-row">
      <div className="d-flex align-items-center flex-row">
        <BiUserCircle />

        <div className="d-flex align-items-center flex-column">
          name <Button>Follow</Button>
          <PostDate post={post} />
        </div>
      </div>

      <div className="d-flex align-items-center" >
        <FaTwitter size="28" />
        <AiFillLinkedin size="28" /> <AiFillFacebook size="28" />
        <Bookmark post={post} /> <BsThreeDots size="28" />
      </div>
    </div>
  );
}

export default DetailsHeader;
