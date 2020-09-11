import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";

function Login(props) {
  return (
    <div className="login">
      <img
        className="login__img "
        src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Issue_logo.png"
        alt=""
      />

      <Button
        className="login__button"
        color="primary"
        variant="contained"
        fontSize="large"
        onClick={props.signin}
      >
        Sign In With GOOGLE
      </Button>
    </div>
  );
}

export default Login;
