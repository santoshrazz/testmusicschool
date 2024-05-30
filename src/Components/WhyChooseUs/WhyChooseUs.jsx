"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import Dance1 from "../../../public/Dance 1.jpg";
import Dance2 from "../../../public/Dance 2.jpg";
import Dance3 from "../../../public/Dance 3.jpg";
import Dance4 from "../../../public/Dance 4.jpg";
const content = [
  {
    title: "Expert Instructors",
    description:
      "Our dance academy boasts a team of highly skilled and experienced instructors who are passionate about dance. They provide personalized attention and guidance to help you achieve your dance goals, whether you're a beginner or an advanced dancer.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={Dance1}
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Diverse Dance Styles",
    description:
      "We offer a wide range of dance styles to suit every interest and skill level. From ballet and hip-hop to contemporary and Latin dance, our diverse curriculum ensures there's something for everyone. Explore new styles and expand your dance repertoire with us.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={Dance2}
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Flexible Scheduling",
    description:
      "We understand the demands of a busy lifestyle, which is why we offer flexible class schedules to accommodate your needs. With morning, afternoon, and evening classes available, you can find the perfect time to pursue your dance passion.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={Dance3}
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Community and Support",
    description:
      "Join a vibrant and supportive community of dancers who share your passion. Our academy fosters a welcoming atmosphere where students can connect, collaborate, and grow together. Participate in performances, events, and workshops that build camaraderie and showcase your talents.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={Dance4}
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function WhyChooseUs() {
  return (
    <div className="p-10">
      <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl text-center my-5">
        Why Choose Us
      </h2>
      <StickyScroll content={content} />
    </div>
  );
}
