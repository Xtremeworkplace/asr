import React from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
const pay = () => {
  return (
    <div className="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
      <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
        <StaticImage
          src="https://kitwind.io/assets/kometa/laptop.png"
          className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
          alt=""
        />
      </div>
      <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
        <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-lg font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              TOTAL VALUE: $3078

              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            YOURS TODAY FOR 
            
            
              <br className="hidden md:block" />
              ONLY {' '}
              <span className="inline-block text-deep-purple-accent-400">
              $299 USD
              </span>
            </h2>
            <p className="text-base text-gray-900 md:text-lg">
          <strong>  JOIN NOW AT THE MOST 
            AFFORDABLE PRICE EVER</strong>
<br />
Pay Now and save $230 PLUS receive access to a Community Videos Series! Over 70% of our action takers choose this option (OFFER VALID FOR LIMITED TIME)
<br />
<strong>PAY ONLY $69 USD
</strong>
            </p>
          </div>
          <div>
          <Link
            href="https://rzp.io/l/100-days-challenge"
            className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-gray-900 transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-yellow-400 focus:shadow-outline focus:outline-none"
          >
        Join Challenge Now
          </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default pay