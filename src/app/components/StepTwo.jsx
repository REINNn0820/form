"use client";
import { useState } from "react";

export function StepTwo({ setCurrentStep }) {
  return (
    <div>
      <button onClick={() => setCurrentStep(1)}>Back</button>
      <button onClick={() => setCurrentStep(3)}>Next</button>
    </div>
  );
}
