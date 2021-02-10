import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useSelector } from "../../hooks/useSelector";
import { userSelectors } from "../../store";
import Archived from "./Archived";
import Highlight from "./Highlight";
import Recent from "./Recent";
import Saved from "./Saved";

function ReadingList() {
  const [key, setKey] = useState<string>("saved");
  const { user, loading, error } = useSelector(userSelectors);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return null;
  }

  const items = [
    {
      eventKey: "saved",
      title: `Saved (${user.bookmarks.length})`,
      panel: <Saved />,
    },
    { eventKey: "archived", title: "archived", panel: <Archived /> },
    { eventKey: "highlights", title: "highlights", panel: <Highlight /> },
    { eventKey: "recent", title: "recent", panel: <Recent /> },
  ];

  const onSelect = (k: any) => {
    if (k) {
      return setKey(k);
    }
  };

  const renderTabs = () => {
    return items.map(({ eventKey, title, panel }) => {
      return (
        <Tab key={title} eventKey={eventKey} title={title}>
          {panel}
        </Tab>
      );
    });
  };

  return (
    <Tabs activeKey={key} onSelect={onSelect} id="readingList">
      {renderTabs()}
    </Tabs>
  );
}

export default ReadingList;
