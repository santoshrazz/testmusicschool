import React from "react";
import { Webinars_Card } from "@/Components/Future_Webinars/Webinars_Card";

const Webinars = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900">
      <div className="heading text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          Featured Webminars
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn With the best
        </p>
      </div>
      <div className="cards">
        <Webinars_Card />
      </div>
      <div className="buttons w-full flex justify-center">
        <button className="btn bg-white px-4 py-3 my-4 rounded-md">
          View All Webminar
        </button>
      </div>
    </div>
  );
};

export default Webinars;
