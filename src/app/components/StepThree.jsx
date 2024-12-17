"use client";
import { useState } from "react";

export function StepThree({ setCurrentStep }) {
  return (
    <div>
      <button onClick={() => setCurrentStep(2)}>Back</button>
    </div>
  );
}
