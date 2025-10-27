"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import courseData from "../data/music-courses.json";

function Page() {
  return (
    <div className="min-h-screen py-12 pt-36 bg-black text-white">
      {/* Heading */}
      <h1 className="text-lg md:text-7xl text-center mb-10 font-sans font-bold">
        All Courses ({courseData.courses.length})
      </h1>

      {/* Cards Grid */}
      <div className="flex flex-wrap justify-center gap-8 px-6">
        {courseData.courses.map((course) => (
          <CardContainer key={course.id} className="inter-var">
            <CardBody className="bg-gray-900 relative group/card hover:shadow-2xl hover:shadow-purple-500/20 border border-gray-700 w-auto sm:w-[24rem] h-auto rounded-xl p-6 transition-all duration-300">
              
              {/* Title */}
              <CardItem translateZ="50" className="text-2xl font-bold mb-2">
                {course.title}
              </CardItem>

              {/* Description */}
              <CardItem as="p" translateZ="60" className="text-gray-400 text-sm mb-4">
                {course.description}
              </CardItem>

              {/* Image */}
              <CardItem translateZ="100" className="w-full mb-6">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-56 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>

              {/* Bottom buttons */}
              <div className="flex justify-between items-center">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="#"
                  className="px-4 py-2 rounded-xl text-xs font-normal text-gray-300 hover:text-purple-400 transition"
                >
                  Learn More →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition"
                >
                  Enroll
                </CardItem>
              </div>

            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default Page;
