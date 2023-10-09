"use client";
import React from "react";
import MainLayout from "@/components/MainLayout";
import CreateTask from "@/components/CreateTask";
import RecentRecord from "@/components/RecentRecord";

export default function Home() {
  return (
    <MainLayout>
      <CreateTask />
      <RecentRecord />
    </MainLayout>
  );
}
