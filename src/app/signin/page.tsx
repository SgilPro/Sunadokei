"use client";
import React, { useEffect } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/service/firebase";

import SignIn from "@/components/SignIn";
import { useRouter } from "next/navigation";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [router, user]);

  return <>{!user && <SignIn />}</>;
}
