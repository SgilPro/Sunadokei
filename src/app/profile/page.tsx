"use client";
import React, { useEffect } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/service/firebase";

import SignOut from "@/components/SignOut";
import TestData from "@/components/TestData";
import User from "@/components/User";
import { createTestData } from "@/repo/RecordRepo";
import { useRouter } from "next/navigation";
import MainLayout from "@/components/MainLayout";

export default function Profile() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/signin");
    }
  }, [router, user]);

  return (
    <MainLayout>
      <User user={user} />
      {
        <>
          <TestData />
          <button onClick={createTestData}>Create test data</button>
          <SignOut />
        </>
      }
    </MainLayout>
  );
}
