import React, { useEffect, useState } from "react";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { Checkbox, IconButton } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/Inbox";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import PeopleIcon from "@material-ui/icons/People";
import RedoIcon from "@material-ui/icons/Redo";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import "./EmailList.css";
import { db } from "./firebase";

const EmailList = () => {
  const [emails, setEmails] = useState([]);

  // loading existing data collection from firebase
  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <KeyboardArrowDownIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
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
      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected={true} />
        <Section Icon={PeopleIcon} title="Social" color="#1a73e8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>
      {/* accessing pulled data and rendering into our front-end view into email lists */}
      <div className="emailList__list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
        <EmailRow
          id="123"
          key="153"
          title="Hello"
          subject="Hard coded title"
          description="Hard coded message"
          time="10:pm"
        />
        <EmailRow
          id="123"
          key="153"
          title="Hello"
          subject="Hard coded title"
          description="Hard coded message"
          time="10:pm"
        />
        <EmailRow
          id="123"
          key="153"
          title="Hello"
          subject="Hard coded title"
          description="Hard coded message"
          time="10:pm"
        />
        <EmailRow
          id="123"
          key="153"
          title="Hello"
          subject="Hard coded title"
          description="Hard coded message"
          time="10:pm"
        />
        <EmailRow
          id="123"
          key="153"
          title="Hello"
          subject="Hard coded title"
          description="Hard coded message"
          time="10:pm"
        />
        <EmailRow
          id="123"
          key="153"
          title="Hello"
          subject="Hard coded title"
          description="Hard coded message"
          time="10:pm"
        />
        <EmailRow
          id="123"
          key="153"
          title="Hello"
          subject="Hard coded title"
          description="Hard coded message"
          time="10:pm"
        />
        <EmailRow
          id="123"
          key="153"
          title="Hello"
          subject="Hard coded title"
          description="Hard coded message"
          time="10:pm"
        />
        <EmailRow
          id="123"
          key="153"
          title="Hello"
          subject="Hard coded title"
          description="Hard coded message"
          time="10:pm"
        />
        <EmailRow
          id="123"
          key="153"
          title="Hello"
          subject="Hard coded title"
          description="Hard coded message"
          time="10:pm"
        />
        <EmailRow
          id="123"
          key="153"
          title="Hello"
          subject="Hard coded title"
          description="Hard coded message"
          time="10:pm"
        />
        <EmailRow
          id="123"
          key="153"
          title="Hello"
          subject="Hard coded title"
          description="Hard coded message"
          time="10:pm"
        />
        <EmailRow
          id="123"
          key="153"
          title="Hello"
          subject="Hard coded title"
          description="Hard coded message"
          time="10:pm"
        />
        <EmailRow
          id="123"
          key="153"
          title="Hello"
          subject="Hard coded title"
          description="Hard coded message"
          time="10:pm"
        />
        <EmailRow
          id="123"
          key="153"
          title="Hello"
          subject="Hard coded title"
          description="Hard coded message"
          time="10:pm"
        />
        <EmailRow
          id="123"
          key="153"
          title="Hello"
          subject="Hard coded title"
          description="Hard coded message"
          time="10:pm"
        />
      </div>
    </div>
  );
};

export default EmailList;
