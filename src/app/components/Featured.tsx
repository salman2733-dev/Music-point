import coursedata from "../data/music-courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image:string;
}

const Featured = () => {
  const featurecourse = coursedata.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
      {/* Heading Section */}
      <div className="text-center">
        <h2 className="text-base text-teal-500 uppercase tracking-wide font-semibold">
          Featured Courses
        </h2>
        <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-white">
          Learn with the best
        </h1>
      </div>

      {/* Courses Grid */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {featurecourse.map((course: Course) => (
          <div key={course.id} className="flex justify-center text-black">
            <BackgroundGradient className="flex flex-col rounded-[22px] bg-gray-900 text-white overflow-hidden h-full max-w-sm">
              {/* Image */}
              <div className="w-full h-60 overflow-hidden">
                <img
                  src={course.image}
                  alt='pic'
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col items-center text-center">
                <h3 className="font-bold text-2xl text-gray-900 dark:text-white">
                  {course.title}
                </h3>
                <p className="mt-3 text-white dark:text-gray-300 text-sm">
                  {course.description}
                </p>

                <Link
                  href={`/courses/${course.slug}`}
                  className="mt-6 text-teal-600 font-semibold hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>

      {/* View All */}
      <div className="text-center mt-16">
       <Link
  href="/courses"
  className="font-bold mt-30 bg-white text-neutral-700 py-3 px-6 border-4 rounded-2xl border-transparent 
             bg-clip-padding bg-linear-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-teal-400 transition"
>
  View all courses
</Link>

      </div>
    </div>
  );
};

export default Featured;
