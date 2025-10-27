"use client";

import dynamic from "next/dynamic";

// Dynamic import with SSR off for all components that use browser-only APIs
const Hero = dynamic(() => import("./components/Hero"), { ssr: false });
const Featured = dynamic(() => import("./components/Featured"), { ssr: false });
const WhyChoose = dynamic(() => import("./components/WhyChoose"), { ssr: false });
const MovingCard = dynamic(() => import("./components/MovingCard"), { ssr: false });
const Webinars = dynamic(() => import("./components/Webinars"), { ssr: false });
const Testomonials = dynamic(() => import("./components/Testomonials"), { ssr: false });
const Footer = dynamic(() => import("./components/Footer"), { ssr: false });

const Page = () => {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <Featured />
      <WhyChoose />
      <MovingCard />
      <Webinars />
      <Testomonials />
      <Footer/>
    </div>
  );
};

export default Page;
