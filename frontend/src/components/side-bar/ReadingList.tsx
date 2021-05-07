import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { postSelectors } from "../../store";
import { IconBookmarks } from "../icons";
import Post from "../post";

function ReadingList() {
  const { reading } = useSelector(postSelectors);

  return (
    <div>
      <div>
        <IconBookmarks /> reading list
      </div>

      <div>
        {reading.map((post) => (
          <Post key={`post-${post._id}`} {...post} />
        ))}
        <NavLink to="/reading-list">See your full reading list</NavLink>
      </div>
    </div>
  );
}

export default ReadingList;
