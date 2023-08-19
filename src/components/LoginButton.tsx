import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { signIn } from "@/service/auth";

export enum LoginType {
  GOOGLE = "Google",
}

export default function LoginButton({ type }: { type: LoginType }) {
  return (
    <button
      className="flex justify-center items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={signIn}
    >
      {type === LoginType.GOOGLE && (
        <>
          {" "}
          <FontAwesomeIcon icon={faGoogle} />
          <span>Login with {type.toString()}</span>
        </>
      )}
    </button>
  );
}
