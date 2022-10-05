import React from 'react'

import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

const header = () => {
  return (
    <header>
    <Link
      to="/">
      <StaticImage
      alt="Asr Mega Mart Logo"
    height={100} width={100}
      style={{ margin: 0 }}
      src="https://res.cloudinary.com/asrmegamart/image/upload/v1664903342/Asrmegamart/images/asr_mega_mart_150-150_li3g8u.png"
    />
    </Link>
    
  </header>
  )
}

export default header