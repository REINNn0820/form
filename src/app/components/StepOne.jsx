"use client";
import { useState } from "react";

export function StepOne({ setCurrentStep }) {
  return (
    <div className="bg-gray-100 w-full h-screen flex justify-center items-center ">
      <main className="w-[480px] h-[655px] rounded-[8px] bg-[#ffffff] flex flex-col gap-2 pl-[30px] pt-[20px]">
        <div>
          <img src="./pineconelogo.png" />
        </div>
        <div>
          <h2 className="text-[24px] font-bolds">Join us!</h2>
          <p className="text-[#8E8E8E]">
            Please provide all current information accurately
          </p>
        </div>
      </main>
      <button onClick={() => setCurrentStep(2)}>next</button>
    </div>
  );
}
