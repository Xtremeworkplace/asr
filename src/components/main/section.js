import React from 'react'


import { StaticImage } from "gatsby-plugin-image"

const section = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-lg md:text-lg font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Abhi Nahi Toh Kabhi Nahi
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="3071a3ad-db4a-4cbe-ac9a-47850b69e4b7"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#3071a3ad-db4a-4cbe-ac9a-47850b69e4b7)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative"></span>
          </span>{' '}
          EVERYTHING YOU GET WITH 100 DAYS CHALLENGE 
        </h2>
        <p className="text-2xl text-gray-700 md:text-4xl">
        ZERO TO LAUNCH!
        </p>
      </div>
      <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="flex flex-col justify-center">
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
              IMMERSION: 2022 100 DAYS CHALLENGE COURSE (ACCESS IMMEDIATELY) ($497)
              </h6>
              <p className="text-sm text-gray-900">
              This brand new version of the legendary 100 DAYS CHALLENGE course was tailored for today’s changing world and will take you on the 6 step journey to launch & scale your first or next product! *For a limited time get the complete Interactive Workbook & other powerful bonuses below

              </p>
              <hr className="w-full my-6 border-gray-300" />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
              REPETITION: 6 WEEKS OF LIVE GROUP COACHING W/ ANUJ SHARMA ($599)
              </h6>
              <p className="text-sm text-gray-900">
              Kickoff call Sunday 12:00 PM ISTNothing can set you up for success better than Anuj Sharma personally coaching you each week until the World Summit to gain confidence, capabilities and the next best steps to get your first or next product launched and ready to sell to the world.

              </p>
              <hr className="w-full my-6 border-gray-300" />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
              COMMUNITY: ACCESS TO THE GREATEST PRIVATE GROUP ON THE PLANET (PRICELESS)
              </h6>
              <p className="text-sm text-gray-900">
              Tap into your ultimate secret weapon and join your new family of action takers to receive regular confidence boosts, accountability, advice, weekly live from Anuj Sharma and collaboration with people who are on the same page as you.

              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <StaticImage
            className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
            src="https://res.cloudinary.com/asrmegamart/image/upload/v1664955082/Asrmegamart/images/poster_sewak0.png"
            alt="100 days Challenge"
          />
          <StaticImage
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://res.cloudinary.com/asrmegamart/image/upload/v1664955082/Asrmegamart/images/poster_sewak0.png"
            alt=""
          />
          <StaticImage
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://res.cloudinary.com/asrmegamart/image/upload/v1664955082/Asrmegamart/images/poster_sewak0.png"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default section