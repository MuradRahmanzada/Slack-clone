import React, { useState } from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../Firebase/Firebase";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";


function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = (error) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login_container">
        <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" />
        <h1>Sign in to Programmer HQ </h1>
        <p>muradrahmanzada.slack.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
