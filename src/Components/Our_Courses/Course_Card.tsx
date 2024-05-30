"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Link from "next/link";
import { Course } from "@/Interface/Interface";

export function Course_Card({ course }: { course: Course }) {
  return (
    <div className="flex justify-center items-center">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
          <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            {course.title}
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
            {course.description}
          </p>
          <Link
            href={`/courses/${course.slug}`}
            className=" bg-white m-4 px-4 py-2 rounded-md"
          >
            Learn More
          </Link>
        </div>
      </BackgroundGradient>
    </div>
  );
}
