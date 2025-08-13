"use client";
import dynamic from "next/dynamic";
import React from "react";

const Slider = dynamic(() => import("./slider"), { ssr: false });

export default function SliderClient() {
  return <Slider />;
}


