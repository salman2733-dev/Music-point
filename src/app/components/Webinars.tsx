import React from 'react'
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";



function Webinars() {
    const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

  return (
    <div className='py-12 bg-grey-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <div className='text-center'>
                <h2 className='text-base text-teal-500 uppercase tracking-wide font-semibold'>FEATURED WEBINARS</h2>

                <h1 className='mt-10 font-bold text-3xl'>Enhance Your Musical Journey</h1>
            </div>
            <div className='mt-10'>
 <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
            </div>
            <div className='mt-10 text-center'>
                 <Link
                  href={`/`}
                  className="mt-6 text-white-600 bg-grey-900 border-2 p-3 rounded-2xl border-teal-600 "
                >
                  View More Webinar
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Webinars
