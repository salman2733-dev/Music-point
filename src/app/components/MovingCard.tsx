"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness...",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer...",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote:
      "All that we see or seem is but a dream within a dream — a sea of troubles, and by opposing end them.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse...",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

const MovingCard = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full overflow-hidden bg-black">
      {/* 🔳 Grey Grid Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          // Light grey grid lines
          "[background-image:linear-gradient(to_right,#3f3f46_1px,transparent_1px),linear-gradient(to_bottom,#3f3f46_1px,transparent_1px)]"
        )}
      />

      {/* 🌫 Radial Fade Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

     

      {/* 🎵 Infinite Moving Cards Section */}
      <div className="relative z-20 flex flex-col items-center justify-center gap-12 h-[40rem] w-full px-4 rounded-md antialiased overflow-hidden">
        <h2 className="text-3xl font-bold text-white mb-14">
          Hear Our Harmony — Voice of Success
        </h2>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default MovingCard;
