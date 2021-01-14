import React from "react";
import "./Mail.css";
import { Avatar, Button, IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArchiveIcon from "@material-ui/icons/Archive";
import ReportIcon from "@material-ui/icons/Report";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import LabelIcon from "@material-ui/icons/Label";
import PrintIcon from "@material-ui/icons/Print";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ReplyIcon from "@material-ui/icons/Reply";
import { useHistory } from "react-router-dom";

const Mail = () => {
  const history = useHistory();
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => history.push("/")}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <ArchiveIcon />
          </IconButton>
          <IconButton>
            <ReportIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <LabelIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mail__toolsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardIcon />
          </IconButton>
          <IconButton>
            <KeyboardArrowDownIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail__outer">
        <div className="mail__outerLeft">
          <h2>Subject line come here</h2>
          <IconButton>
            <LabelImportantIcon className="mail__important" />
          </IconButton>
          <p>Title</p>
          <p>10pm</p>
        </div>
        <div className="mail__outerRight">
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <OpenInNewIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__bodyLeft">
          <div className="mail__bodyLeftAvatar">
            <IconButton>
              <Avatar />
            </IconButton>
          </div>
          <p>Sender's email</p>
          <div className="mail__toMe">
            <p>to me</p>
            <IconButton>
              <KeyboardArrowDownIcon />
            </IconButton>
          </div>
        </div>
        <div className="mail__bodyRight">
          <p>11:00 AM (minutes ago)</p>
          <IconButton>
            <StarBorderIcon />
          </IconButton>
          <IconButton>
            <ReplyIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail__message">Message</div>
    </div>
  );
};

export default Mail;
