"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const whyChooseData = [
  {
    title: "Expert Instructors",
    description:
      "Learn from professional musicians and certified teachers who bring real-world experience to every class.",
    content: (
      <div className="w-full h-full flex items-center justify-center">
        <img
          src="/public/mike.avif"
          alt="Expert Instructors"
          className="rounded-1xl w-full h-90 object-cover shadow-lg"
        />
      </div>
    ),
  },
  {
    title: "Personalized Learning",
    description:
      "Get a customized learning plan based on your musical goals, skill level, and preferred style.",
    content: (
      <div className="w-full h-full flex items-center justify-center">
        <img
          src="/public/gitar.avif"
          alt="Personalized Learning"
          className="rounded-1xl w-full h-90 object-cover shadow-lg"
        />
      </div>
    ),
  },
  {
    title: "Modern Facilities",
    description:
      "Practice in fully equipped studios featuring the latest instruments and soundproof environments.",
    content: (
      <div className="w-full h-full flex items-center justify-center">
        <img
          src="/public/lalala.avif"
          alt="Modern Facilities"
          className="rounded-1xl w-full h-90 object-cover shadow-lg"
        />
      </div>
    ),
  },
  {
    title: "Performance Opportunities",
    description:
      "Showcase your talent in live concerts, student recitals, and online streaming sessions.",
    content: (
      <div className="w-full h-full flex items-center justify-center">
        <img
          src="/public/you.avif"
          alt="Performance Opportunities"
          className="rounded-1xl w-full h-90 object-cover shadow-lg "
        />
      </div>
    ),
  },
 
];

const WhyChoose = () => {
  return (
    <section className=" bg-black text-white">
      <div>
        
    <StickyScroll content={whyChooseData} />
      </div>
    </section>
  );
};

export default WhyChoose;
