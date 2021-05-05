import React from "react";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { BiMessage, BiUserCircle } from "react-icons/bi";
import {
  BsArchive,
  BsBell,
  BsBookmark,
  BsBookmarkFill,
  BsBookmarks,
  BsPlus,
  BsSearch,
  BsThreeDots,
} from "react-icons/bs";
import { FaRegHandPaper, FaTwitter } from "react-icons/fa";

export const IconBell = ({ ...props }) => <BsBell {...props} />;
export const IconBookmarks = ({ ...props }) => <BsBookmarks {...props} />;
export const IconSearch = ({ ...props }) => <BsSearch {...props} />;
export const IconBookmark = ({ ...props }) => (
  <BsBookmark size="22" {...props} />
);
export const IconBookmarkFill = ({ ...props }) => (
  <BsBookmarkFill size="22" {...props} />
);
export const IconUserCircle = ({ ...props }) => <BiUserCircle {...props} />;
export const IconClap = ({ ...props }) => <FaRegHandPaper {...props} />;
export const IconMessage = ({ ...props }) => <BiMessage {...props} />;
export const IconPlus = ({ ...props }) => <BsPlus {...props} />;
export const IconFacebook = ({ ...props }) => <AiFillFacebook {...props} />;
export const IconLinkedin = ({ ...props }) => <AiFillLinkedin {...props} />;
export const IconTwitter = ({ ...props }) => <FaTwitter {...props} />;
export const IconThreeDots = ({ ...props }) => <BsThreeDots {...props} />;
export const IconArchive = ({ ...props }) => <BsArchive {...props} />;
