import React from "react";
import NavBar from "./NavBar";
export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center bg-sd-orange-1">
      <div className="w-[480px] sm:w-full bg-white text-sd-orange-4 h-screen">
        <NavBar />
        <div className="p-10">{children}</div>
      </div>
    </div>
  );
}
