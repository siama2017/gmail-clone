import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button, IconButton } from "@material-ui/core";
import MinimizeIcon from "@material-ui/icons/Minimize";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import firebase from "firebase";

const SendMail = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (formData) => {
    //adding data to firebase (Cloud Firestore)
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <div className="sendMail__headerLeft">
          <h3>New Message</h3>
        </div>
        <div className="sendMail__headerRight">
          <IconButton>
            <MinimizeIcon className="modifyColor" />
          </IconButton>
          <IconButton>
            <UnfoldMoreIcon className="modifyColor" />
          </IconButton>
          <IconButton
            onClick={() => {
              dispatch(closeSendMessage());
            }}
          >
            <CloseIcon className="sendMail_headerRightClose modifyColor " />
          </IconButton>
        </div>
      </div>
      <div className="sendMail__forms">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="to"
            className="sendDMail__input"
            placeholder="To"
            type="email"
            ref={register({ required: true })}
          />
          {errors.to && (
            <p className="sendMail__errorTo">Enter recipeint email address</p>
          )}
          <input
            name="subject"
            className="sendDMail__input"
            placeholder="Subject"
            type="text"
            ref={register({ required: true })}
          />
          {errors.subject && (
            <p className="sendMail__errorSubject">Please enter subject line</p>
          )}
          <input
            name="message"
            className="sendMail__formsMessage sendDMail__input"
            type="text"
            ref={register({ required: true })}
          />
          <div className="sendMail__options">
            <Button
              className="sendMail__send"
              variant="contained"
              color="primary"
              type="submit"
              ref={register({ required: true })}
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendMail;
