import React from 'react'
import { Link } from "gatsby"
const banner = () => {
  return (
    <div className="bg-deep-purple-accent-700">
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
          <a href="/" className="mb-6 sm:mx-auto">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-accent-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
          </svg>
          
            </div>
          </a>
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-5xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">100</span>
              </span>{' '}
               Days Challenge Bootcamp Program
            </h2>
            <p className="text-base text-indigo-100 md:text-4xl">
            Learn Content Creation, Marketing, Designing, and More in Just 100 Days.

            </p>
          </div> 

          <div class="aspect-w-16 aspect-h-9">
  <iframe src="https://player.vimeo.com/video/757071802?color=0c88dd&title=0&byline=0&portrait=0&badge=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
</div>
<br /> <div>
            <Link
              href="/"
              className="inline-flex items-center text-xl md:text-xl justify-center h-12 px-6 font-semibold tracking-wide text-dark-900 transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-yellow-accent-400  focus:shadow-outline focus:outline-none"
            >
              Join Challenge Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default banner