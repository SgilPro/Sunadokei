import React from "react";
import { getTestData } from "@/repo/RecordRepo";

const TestData = async () => {
  const testData = await getTestData("只是測試");
  return (
    <div>
      <div>{testData.title}</div>
      <div>{testData.description}</div>
    </div>
  );
};

export default TestData;
