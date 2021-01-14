import { Button, IconButton } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import SendIcon from "@material-ui/icons/Send";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import React from "react";
import SidebarLinks from "./SidebarLinks";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openSendMessage, selectSendMessageIsOpen } from "./features/mailSlice";

const Sidebar = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        onClick={() => {
          dispatch(openSendMessage());
        }}
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
      >
        Compose
      </Button>
      <SidebarLinks
        Icon={InboxIcon}
        title="Inbox"
        number={54}
        selected={true}
      />
      <SidebarLinks Icon={StarIcon} title="Starred" number={25} />
      <SidebarLinks Icon={WatchLaterIcon} title="Snoozed" number={54} />
      <SidebarLinks Icon={LabelImportantIcon} title="Important" number={54} />
      <SidebarLinks Icon={SendIcon} title="Sent" number={54} />
      <SidebarLinks Icon={NoteIcon} title="Drafts" number={54} />
      <SidebarLinks Icon={ExpandMoreIcon} title="More" number={54} />
      <SidebarLinks Icon={InboxIcon} title="Sent" number={54} />
      <SidebarLinks Icon={InboxIcon} title="Sent" number={54} />
      <div className="sidebar__footer">
        <div className="sidebar__footerIcon">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
