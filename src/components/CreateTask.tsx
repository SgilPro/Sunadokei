import React from "react";
import Title from "./Title";
import Button from "./Button";
import FormItem, { FormItemType } from "./FormItem";

export default function CreateTask() {
  return (
    <div>
      <Title text="Record Your Task" />
      <div className="bg-sd-orange-2 w-full h-64 py-2 px-4">
        <FormItem label="Title" type={FormItemType.INPUT} />
        <FormItem label="Note / Description" type={FormItemType.TEXTAREA} />
        <div className="flex gap-4">
          <FormItem label="Time-span" type={FormItemType.SELECT} />
          <FormItem label="Date" type={FormItemType.SELECT} />
          <FormItem label="Create" type={FormItemType.BUTTON} />
        </div>
      </div>
    </div>
  );
}
