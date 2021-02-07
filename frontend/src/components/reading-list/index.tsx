import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Archived from "./Archived";
import Highlight from "./Highlight";
import Recent from "./Recent";
import Saved from "./Saved";

function ReadingList() {
  const [key, setKey] = useState<string>("saved");

  const onSelect = (k: any) => {
    if (k) {
      return setKey(k);
    }
  };

  return (
    <Tabs activeKey={key} onSelect={onSelect} id="readingList">
      <Tab eventKey="saved" title={`Saved (${4})`}>
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
