'use client'
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IoBusinessOutline } from "react-icons/io5";
import { FaPeopleArrows } from "react-icons/fa";
import { BiPlusMedical } from "react-icons/bi";
import { GoLaw } from "react-icons/go";

gsap.registerPlugin(ScrollTrigger);

function ParallaxSection() {
  const backgroundRef = useRef(null);

  useEffect(() => {
    // Animate background (always active)
    gsap.to(backgroundRef.current, {
      yPercent: -60,
      ease: 'none',
      scrollTrigger: {
        trigger: backgroundRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className='relative w-full h-full min-h-screen overflow-hidden px-6 md:px-10 py-10'>
      <h1 className='text-center text-gray-200 bg-transparent font-extrabold text-5xl md:text-6xl mb-16'>Services</h1>

      <div className='relative '>
        {/* Background Image */}
        <div
          ref={backgroundRef}
          style={{
            backgroundImage: 'url(/header.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className='absolute inset-0 md:top-[40%] md:left-0 md:w-[70%] w-full h-[60%] md:h-full -z-10'
        />

        {/* Foreground Grid */}
        <div
          className='relative max-w-7xl mx-auto z-10 grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-b from-[#41506f] to-[#1b212b] p-4 md:px-8 md:py-18 rounded-lg'
        >
          {/* Commercial Collection */}
          <div className='relative w-full p-6 bg-transparent'>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent pointer-events-none hidden sm:block"></div>
            <div className='flex flex-col justify-center gap-4'>
              <IoBusinessOutline size={25} className='text-white' />
              <h3 className='text-2xl text-white'>Commercial Collection</h3>
              <p className='text-dark-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit...</p>
            </div>
          </div>

          {/* Consumer Collection */}
          <div className='relative w-full p-6 bg-transparent'>
            <div className="absolute bottom-0 right-1/2 translate-x-1/2 h-[1px] w-full bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none hidden sm:block"></div>
            <div className='flex flex-col justify-center gap-4'>
              <FaPeopleArrows size={25} className='text-white' />
              <h3 className='text-2xl text-white'>Consumer Collection</h3>
              <p className='text-dark-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit...</p>
            </div>
          </div>

          {/* Medical Collection */}
          <div className='relative w-full p-6 bg-transparent'>
            <div className="absolute top-0 right-1/2 translate-x-1/2 h-[1px] w-full bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none hidden sm:block"></div>
            <div className='flex flex-col justify-center gap-4'>
              <BiPlusMedical size={25} className='text-white' />
              <h3 className='text-2xl text-white'>Medical Collection</h3>
              <p className='text-dark-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit...</p>
            </div>
          </div>

          {/* Legal Collection */}
          <div className='relative w-full p-6 bg-transparent'>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-full w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent pointer-events-none hidden sm:block"></div>
            <div className='flex flex-col justify-center gap-4'>
              <GoLaw size={25} className='text-white' />
              <h3 className='text-2xl text-white'>Legal Collection</h3>
              <p className='text-dark-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParallaxSection;
