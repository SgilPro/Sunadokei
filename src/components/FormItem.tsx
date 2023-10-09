import React from "react";
import Button, { ButtonType } from "./Button";

export const enum FormItemType {
  INPUT = "input",
  TEXTAREA = "textarea",
  SELECT = "select",
  BUTTON = "button",
}

const basicClasses = "rounded border-sd-orange-4";

const getFormItem = (type: FormItemType, width?: number, label?: string) => {
  let classes: string = basicClasses;
  if (width === undefined) {
    classes += " w-full";
  } else {
    classes += ` w-[${width}px]`;
  }
  switch (type) {
    case FormItemType.INPUT:
      return <input className={classes} />;
    case FormItemType.TEXTAREA:
      return <textarea className={classes} />;
    case FormItemType.SELECT:
      return <select className={classes} />;
    case FormItemType.BUTTON:
      return <Button type={ButtonType.SOLID}>{label}</Button>;
    default:
      return <div>{label}</div>;
  }
};

export default function FormItem({
  label,
  type,
  width,
}: {
  label: string;
  type: FormItemType;
  width?: number;
}) {
  return (
    <div className="mb-2">
      {<div className="h-6">{type === FormItemType.BUTTON ? "" : label}</div>}
      {getFormItem(type, width, label)}
    </div>
  );
}
