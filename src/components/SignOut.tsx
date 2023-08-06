import React from "react";
import { signOut } from "../service/auth";

const SignOut = () => {
  return (
    <div>
      <button className="button" onClick={signOut}>
        <i className="fab fa-google"></i>Sign out
      </button>
    </div>
  );
};

export default SignOut;
