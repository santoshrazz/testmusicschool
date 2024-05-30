import React from "react";
import { Moving_Card } from "./Moving_Card";

export function GridBackground() {
  return (
    <div className="h-[50rem] overflow-x-hidden w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center flex-col gap-10">
      <div className="heading mb-10">
        <h2 className="text-white text-3xl md:text-5xl font-extrabold">
          Hear our Harmondy : Voice of Success
        </h2>
      </div>
      <div className=" overflow-x-hidden">
        <Moving_Card />
      </div>
    </div>
  );
}
