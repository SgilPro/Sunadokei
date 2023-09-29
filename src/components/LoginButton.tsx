import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { LoginType, signIn } from "@/service/auth";

const loginIconMap: Record<LoginType, IconDefinition> = {
  [LoginType.GOOGLE]: faGoogle,
  [LoginType.FACEBOOK]: faFacebook,
  [LoginType.TWITTER]: faTwitter,
  [LoginType.EMAIL]: faEnvelope,
};

export default function LoginButton({ type }: { type: LoginType }) {
  return (
    // TODO: design disabled pattern
    <button
      className="flex justify-center items-center gap-2 border-2 border-sd-brown-5 text-sd-brown-5 hover:text-sd-orange-4 hover:border-sd-orange-4 bg-white font-bold py-2 px-4 rounded w-60"
      onClick={() => signIn(type)}
    >
      <FontAwesomeIcon icon={loginIconMap[type]} />
      <span>Login with {type}</span>
    </button>
  );
}
