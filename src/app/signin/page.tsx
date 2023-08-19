"use client";
import React, { useEffect } from "react";
import Image from "next/image";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/service/firebase";

import { useRouter } from "next/navigation";
import MainLayout from "@/components/MainLayout";
import LoginButton, { LoginType } from "@/components/LoginButton";

export default function SignIn() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [router, user]);

  return (
    <>
      {!user && (
        <div>
          <MainLayout>
            <header className="flex flex-col justify-center gap-8 items-center h-1/3">
              <Image
                src="/images/hourglass.png"
                width={100}
                height={100}
                alt="HOUR GLASS IMAGE"
              />
              <h1 className="text-5xl font-body font-semibold tracking-wide">
                Sunadokei
              </h1>
            </header>
            <main className="flex justify-center items-center h-1/2 font-body">
              <LoginButton type={LoginType.GOOGLE} />
            </main>
            <footer className="h-1/6"></footer>
          </MainLayout>
        </div>
      )}
    </>
  );
}
