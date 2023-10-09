import React from "react";

export const enum ButtonType {
  SOLID = "solid",
  HOLLOW = "hollow",
  TEXT = "text",
}

const basicClasses =
  "flex justify-center items-center gap-2 border-2 font-medium py-1 px-2 rounded";

const getClasses = (type: ButtonType, color: string) => {
  switch (type) {
    case ButtonType.HOLLOW:
      return `${basicClasses} bg-white border-${color} text-${color}`;
    case ButtonType.TEXT:
      return `${basicClasses} bg-white border-white text-${color}`;
    case ButtonType.SOLID:
    default:
      return `${basicClasses} bg-${color} border-${color} text-white`;
  }
};

export default function Button({
  children,
  onClick = () => {},
  type = ButtonType.SOLID,
  color = "sd-orange-4",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: ButtonType;
  color?: string;
}) {
  return (
    <button className={getClasses(type, color)} onClick={onClick}>
      {children}
    </button>
  );
}
