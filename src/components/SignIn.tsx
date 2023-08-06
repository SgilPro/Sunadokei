import React from "react";
import { signIn } from "../service/auth";

const SignIn = () => {
  return (
    <div>
      <button className="button" onClick={signIn}>
        <i className="fab fa-google"></i>Sign in with google
      </button>
    </div>
  );
};

export default SignIn;
