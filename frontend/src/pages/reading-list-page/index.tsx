import React, { useState } from "react";
import { useSelector } from "react-redux";
import { userSelectors } from "../../store";
import Archived from "./components/archived";
import Highlight from "./components/highlight";
import Recent from "./components/recent";
import Saved from "./components/saved";

function ReadingListPage() {
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
    <div>
      <h3>Reading List</h3>
      <ul>
        {items.map(({ title, panel }) => {
          return <li key={title}>{panel}</li>;
        })}
      </ul>
    </div>
  );
}

export default ReadingListPage;
