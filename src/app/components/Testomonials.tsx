"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import  WavyBackground  from "./ui/wavy-background";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=3534&q=80",
  },
];

function Testomonials() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40 " >
      <div className="text-center mt-50">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var">
          Hero waves are cool
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var">
          Leverage the power of canvas to create a beautiful hero section
        </p>
      </div>

      <div className="flex flex-row items-center justify-center mt-10 w-full">
        <AnimatedTooltip items={people} />
      </div>
    </WavyBackground>
  );
}

export default Testomonials;
