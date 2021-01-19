import React from "react";
import "./EmailRow.css";
import { Checkbox, Button, IconButton } from "@material-ui/core";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedMail } from "./features/mailSlice";

const EmailRow = ({ id, title, subject, description, time }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  // passing the info to the data layer
  const openMail = () => {
    dispatch(
      selectedMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    history.push("/mail");
  };
  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarOutlineIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <div className="emailRow__title">{title}</div>
      <div className="emailRow__message">
        <h4>
          {subject} <span className="emailRow__description">{description}</span>
        </h4>
      </div>

      <p className="emailRow__time">{time}</p>
    </div>
  );
};

export default EmailRow;
