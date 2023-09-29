import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center">
      <div className="w-[480px] sm:w-full bg-sd-orange-1 text-sd-orange-4 h-screen p-10">
        {children}
      </div>
    </div>
  );
}
