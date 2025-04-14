"use client";

import StageSubmit from "./StageSubmit";

export default async function handleChange(newValue, jobId) {
  console.log("Selected stage:", newValue);
  console.log("Job ID:", jobId);
  StageSubmit(jobId, newValue);
}
