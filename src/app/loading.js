"use client";
import React from "react";
import loader1 from "../../public/assets/lottie/loader1.json";
import Lottie from "lottie-react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-[80vh]">
      <Lottie animationData={loader1} loop={true} width={50} height={50} />
    </div>
  );
}
