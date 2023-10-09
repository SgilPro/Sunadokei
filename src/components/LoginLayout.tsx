import React from "react";
import { Colors } from "@/enums/color";
import { isHexColor } from "@/service/color";

const getBackgroundColorWithDefault = (color: string | undefined) => {
  // NOTE: tailwind class sometimes doesn't work
  if (color !== undefined) {
    if (color in Colors) {
      return `bg-${color}`;
    } else if (isHexColor(color)) {
      return `bg-[${color}]`;
    }
  } else {
    return "bg-sd-orange-1";
  }
};

export default function MainLayout({
  children,
  backgroundColor,
}: {
  children: React.ReactNode;
  backgroundColor?: string;
}) {
  return (
    <div className="flex justify-center bg-sd-orange-1">
      <div
        className={`w-[480px] sm:w-full ${getBackgroundColorWithDefault(
          backgroundColor,
        )} text-sd-orange-4 h-screen p-10`}
      >
        {children}
      </div>
    </div>
  );
}
