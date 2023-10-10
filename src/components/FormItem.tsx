import React from "react";
import Button, { ButtonType } from "./Button";

export const enum FormItemType {
  INPUT = "input",
  TEXTAREA = "textarea",
  SELECT = "select",
  BUTTON = "button",
}

const basicClasses =
  "rounded border-2 border-sd-orange-3 hover:border-sd-orange-4 focus:outline-none focus-visible:border-sd-orange-4 px-2";

const getFormItem = (type: FormItemType, width?: number, label?: string) => {
  let classes: string = basicClasses;
  if (width === undefined) {
    classes += " w-full";
  } else {
    classes += ` w-[${width}px]`;
  }
  switch (type) {
    case FormItemType.INPUT:
      classes += " h-10";
      return <input className={classes} />;
    case FormItemType.TEXTAREA:
      classes += " h-[72px] pt-1 resize-none";
      return <textarea className={classes} />;
    case FormItemType.SELECT:
      classes += " h-10";
      return <select className={classes} />;
    case FormItemType.BUTTON:
      classes =
        "flex justify-center items-center gap-2 border-2 font-medium py-1 px-2 rounded bg-sd-orange-4 border-sd-orange-4 text-white w-full h-10";
      return <button className={classes}>{label}</button>;
    default:
      return <div>{label}</div>;
  }
};

export default function FormItem({
  label,
  type,
  width,
  additionalClasses,
}: {
  label: string;
  type: FormItemType;
  width?: number;
  additionalClasses?: string;
}) {
  return (
    <div className={additionalClasses}>
      {<div className="h-6 font-bold">{type === FormItemType.BUTTON ? "" : label}</div>}
      {getFormItem(type, width, label)}
    </div>
  );
}
