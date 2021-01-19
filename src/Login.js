import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { login } from "./features/userSlice";
import { auth, provider } from "./firebase";
import { useDispatch } from "react-redux";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";

const Login = () => {
  const dispatch = useDispatch();
  // Accessing google account information
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__header">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
            alt=""
          />
          <h4 className="signIn">Sign in</h4>
          <p>Use your Google Account</p>
        </div>
        <div className="login__middle">
          {/* <input placeholder="Email or phone" className="input" type="email" /> */}
          <form className="login__middleForm">
            <TextField
              id="outlined-basic"
              label="Email or phone"
              variant="outlined"
            />
          </form>
          <h5>Forgot email?</h5>
        </div>
        <div className="login__bottom">
          <p>Not your computer? Use Guest mode to sign in privately.</p>
          <h5>Learn more</h5>
          <div className="login__containerBottom">
            <h4>Create account</h4>
            <Button variant="contained" color="primary">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
