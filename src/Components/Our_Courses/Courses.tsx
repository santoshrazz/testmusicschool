import React from "react";
import courseData from "./course_data.json";
import Link from "next/link";
import { BackgroundGradient } from "../ui/background-gradient";
import { Course_Card } from "./Course_Card";
import { Course } from "@/Interface/Interface";

const Courses = () => {
  const featuredCourses: Course[] = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className=" min-h-screen w-full">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          Featured Courses
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn With the best
        </p>
      </div>
      <div className="cards mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 p-4">
        {featuredCourses?.map((course) => (
          <div className="flex justify-center items-center" key={course.id}>
            <Course_Card course={course} />
          </div>
        ))}
      </div>

      <div className="buttons"></div>
    </div>
  );
};

export default Courses;
