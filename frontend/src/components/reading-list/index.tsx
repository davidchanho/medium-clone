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
  const { user } = useSelector(userSelectors);

  const onSelect = (k: any) => {
    if (k) {
      return setKey(k);
    }
  };

  return (
    <Tabs activeKey={key} onSelect={onSelect} id="readingList">
      <Tab eventKey="saved" title={`Saved (${user.bookmarks.length})`}>
        <Saved />
      </Tab>
      <Tab eventKey="archived" title="Archived">
        <Archived />
      </Tab>
      <Tab eventKey="highlights" title="Highlights">
        <Highlight />
      </Tab>
      <Tab eventKey="recent" title="Recently viewed">
        <Recent />
      </Tab>
    </Tabs>
  );
}

export default ReadingList;
