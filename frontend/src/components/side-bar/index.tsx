import React from "react";
import { Card } from "react-bootstrap";
import SidebarFollow from "../side-bar-follow";
import SidebarFooter from "../side-bar-footer";

function SideBar() {
  return (
    <Card className="w-50 h-25 mb-2">
      <SidebarFollow />
      <SidebarFooter />
    </Card>
  );
}

export default SideBar;
