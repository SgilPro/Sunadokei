"use client";
import React, { useEffect, useState } from "react";
import { getTestData } from "@/repo/RecordRepo";

const TestData = () => {
  const [isLoading, setLoading] = useState(true);
  const [testData, setTestData] = useState({ title: "", description: "" });
  useEffect(() => {
    getTestData("Just a test").then((data) => {
      setTestData(data);
      setLoading(false);
    });
  }, []);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <>
          <div>{testData.title}</div>
          <div>{testData.description}</div>
        </>
      )}
    </>
  );
};

export default TestData;
