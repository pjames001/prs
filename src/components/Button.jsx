import Link from 'next/link'
import React from 'react'

const Button = ({text, link, className=''}) => {
  return (
    <>
      <Link href={link} className={`${className} reflect relative inline-block py-2 px-4 text-blue-accent uppercase tracking-wider hover:bg-blue-accent hover:text-white hover:shadow-[0_0_5px_#03e9f4,] text-white transition-all duration-300 ease overflow-hidden`}>
        <span className=' absolute block hue-rotate-270'></span>
        <span className=' absolute block hue-rotate-110'></span>
        <span className=' absolute block hue-rotate-'></span>
        <span className=' absolute block hue-rotate-'></span>
        {text}
      </Link>
    </>
  )
}

export default Button