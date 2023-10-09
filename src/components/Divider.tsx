import React from "react";

const getDivider = (text: string) => {
  if (text.length === 0) {
    return <div className="w-60 h-[2px] bg-sd-brown-5" />;
  } else {
    // TODO: get divider width from calc()
    return (
      <>
        <div className="w-24 h-[2px] bg-sd-brown-5" />
        <span className="text-sd-brown-5">{text}</span>
        <div className="w-24 h-[2px] bg-sd-brown-5" />
      </>
    );
  }
};

export default function Divider({ text = "" }: { text?: string }) {
  return <div className="flex gap-2 items-center">{getDivider(text)}</div>;
}
