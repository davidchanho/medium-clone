import React, { useState } from "react";
import { useSelector } from "../../../../hooks/useSelector";
import { userSelectors } from "../../../../store";
import Archived from "./Archived";
import Highlight from "./Highlight";
import Recent from "./Recent";
import Saved from "./Saved";

function ReadingList() {
  const [key, setKey] = useState<string>("saved");
  const { user } = useSelector(userSelectors);

  const onSelect = (k: any) => {
    if (k) {
      return setKey(k);
    }
  };

  const items = [
    {
      title: `Saved (${user?.bookmarks?.length})`,
      panel: <Saved />,
    },
    { title: "Archived", panel: <Archived /> },
    { title: "Highlights", panel: <Highlight /> },
    { title: "Recent", panel: <Recent /> },
  ];

  return (
    <ul>
      {items.map(({ title, panel }) => {
        return <li key={title}>{panel}</li>;
      })}
    </ul>
  );
}

export default ReadingList;
