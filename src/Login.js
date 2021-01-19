import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { login } from "./features/userSlice";
import { auth, provider } from "./firebase";
import { useDispatch } from "react-redux";

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
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_(2020).svg/1200px-Gmail_icon_(2020).svg.png"
          alt=""
        />
        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
