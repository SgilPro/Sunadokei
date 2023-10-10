import React from "react";
import Title from "./Title";
import Button from "./Button";
import FormItem, { FormItemType } from "./FormItem";

export default function CreateTask() {
  return (
    <div>
      <Title text="Record Your Task" />
      <div className="flex flex-col gap-y-1 bg-sd-orange-2 w-full h-64 py-2 px-4">
        <FormItem label="Title" type={FormItemType.INPUT} />
        <FormItem label="Note / Description" type={FormItemType.TEXTAREA} />
        <div className="flex gap-3 justify-stretch w-full">
          <FormItem additionalClasses="grow" label="Time-span" type={FormItemType.SELECT} />
          <FormItem additionalClasses="grow" label="Date" type={FormItemType.SELECT} />
          <FormItem additionalClasses="grow" label="Create" type={FormItemType.BUTTON} />
        </div>
      </div>
    </div>
  );
}
