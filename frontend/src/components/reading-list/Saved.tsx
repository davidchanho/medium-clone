import React from "react";
import { useSelector } from "../../hooks/useSelector";
import { userSelectors } from "../../store";

function Saved() {
  const { user } = useSelector(userSelectors);

  return (
    <ul>
      {user?.bookmarks.map((bookmark) => (
        <li key={`saved-${bookmark._id}`}>
          {bookmark.title}
        </li>
      ))}
    </ul>
  );
}

export default Saved;
