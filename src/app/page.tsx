"use client";
import React from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/service/firebase";

import SignIn from "@/components/SignIn";
import SignOut from "@/components/SignOut";
import TestData from "@/components/TestData";
import User from "@/components/User";
import { createTestData } from "@/repo/RecordRepo";

export default function Home() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <User user={user} />
      {!user && <SignIn />}
      {user && (
        <>
          {/* <TestData /> */}
          <button onClick={createTestData}>Create test data</button>
          <SignOut />
        </>
      )}
    </>
  );
}
