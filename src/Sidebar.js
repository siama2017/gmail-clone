import { Button } from "@material-ui/core";
import { InboxIcon } from "@material-ui/icons/Inbox";
import React from "react";
import SidebarLinks from "./SidebarLinks";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
      >
        Compose
      </Button>
      <SidebarLinks Icon={InboxIcon} title="Inbox" number={54} />
    </div>
  );
};

export default Sidebar;
