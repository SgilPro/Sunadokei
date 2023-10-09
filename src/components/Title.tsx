import React from "react";

export default function Title({ text = "" }: { text?: string }) {
  return (
    <div>
      <h1 className="text-sd-orange-4 text-xl font-bold px-1 mb-1">{text}</h1>
      <div className="w-full h-[2px] bg-sd-orange-4 px-1 mb-3" />
    </div>
  );
}
