import Link from "next/link";
import { Spotlight } from "../components/ui/Spotlight"; 
// ✅ keep as-is if exported by name
import { Button } from "./ui/moving-border";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen bg-black">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      <div className="relative z-10 text-center mt-38">
       <h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-b from-neutral-50 to-neutral-400 mb-2 dark:text-white">
  Master the art of music
</h1>

        <p className="mt-5 text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
          sit et possimus a, natus optio nobis eveniet quos provident fuga!
          Dolorum in facilis vitae error consequatur labore illo unde aperiam?
        </p>

             <div className="bg-grid-slate-600 h-64 w-full flex items-center justify-center">
  <Link href="/courses">
  <Button>Explore Now</Button>
  </Link>
</div>

      </div>
    </div>
  );
};

export default Hero;
