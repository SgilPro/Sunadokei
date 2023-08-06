"use client";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollection } from "react-firebase-hooks/firestore";

import SignIn from "../components/SignIn";
import SignOut from "@/components/SignOut";
import { auth } from "../service/firebase";

export default function Home() {
  // Firestore
  // const db = firebase.firestore();

  // User Authentication
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      {!user && <SignIn />}
      {user && (
        <>
          <div>{user.displayName}</div>
          <div>{user.email}</div>
          {user.photoURL && (
            <Image
              src={user.photoURL}
              width={100}
              height={100}
              alt="Picture of the author"
            />
          )}
          <SignOut />
        </>
      )}
    </>
  );
}
