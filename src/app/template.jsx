'use client'

import { animatePageIn } from "@/utils/animations"
import { useEffect } from "react"

const template = ({children}) => {

  useEffect(() => {
    animatePageIn()
  }, [])

  return (
    <div>
      <div id="banner-1" className="min-h-screen bg-neutral-700 fixed top-0 left-0 w-1/4 z-50"></div> 
      <div id="banner-2" className="min-h-screen bg-neutral-700 fixed top-0 left-1/4 w-1/4 z-50"></div> 
      <div id="banner-3" className="min-h-screen bg-neutral-700 fixed top-0 left-2/4 w-1/4 z-50"></div> 
      <div id="banner-4" className="min-h-screen bg-neutral-700 fixed top-0 left-3/4 w-1/4 z-50"></div> 
      {children}
    </div>
  )
}

export default template