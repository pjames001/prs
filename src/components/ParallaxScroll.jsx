'use client'
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IoBusinessOutline } from "react-icons/io5";
import { FaPeopleArrows } from "react-icons/fa"
import { BiPlusMedical } from "react-icons/bi"
import { GoLaw } from "react-icons/go"

gsap.registerPlugin(ScrollTrigger);

function ParallaxSection() {
  const backgroundRef = useRef(null);
  const foregroundRef = useRef(null);

  useEffect(() => {
    // Animate background element
    gsap.to(backgroundRef.current, {
      yPercent: -80, // Move background slower
      ease: 'none',
      scrollTrigger: {
        trigger: backgroundRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Animate foreground element
    gsap.to(foregroundRef.current, {
      yPercent: 40, // Move foreground faster
      ease: 'none',
      scrollTrigger: {
        trigger: foregroundRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Cleanup function for ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div style={{ height: '100vh', overflow: 'hidden', position: 'relative' }} className='px-10'>
      <h1 className='text-center text-gray-200 font-extrabold text-6xl my-10'>Services</h1>
      <div className='max-w-7xl h-full mx-auto mt-36'>
        <div
          ref={backgroundRef}
          style={{
            position: 'absolute',
            top: '40%',
            right: '40%',
            width: '35%',
            height: '60%',
            backgroundImage: 'url(header.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          ref={foregroundRef}
          style={{
            position: 'relative',
            zIndex: 1,
          }}
          className='relative max-w-4xl ml-auto grid md:grid-cols-2 grid-cols-1 bg-gradient-to-b from-[#41506f] to-[#1b212b]'
        >
          <div className='relative p-8'>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[100%] w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
            <div className='flex flex-col justify-center gap-6'>
              <IoBusinessOutline size={25} className='text-blue-accent' />
              <h3 className='text-2xl text-blue-accent'>Commercial Collection</h3>
              <p className='text-dark-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis laboriosam dignissimos aliquam vel optio! Soluta amet laudantium obcaecati nam molestiae.</p>
            </div>
          </div>

          <div className='relative p-8'>
            <div className="absolute bottom-0 right-1/2 translate-x-1/2 h-[1px] w-full bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            <div className='flex flex-col justify-center gap-6'>
              <FaPeopleArrows size={25} className='text-blue-accent' />
              <h3 className='text-2xl text-blue-accent'>Consumer Collection</h3>
              <p className='text-dark-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis laboriosam dignissimos aliquam vel optio! Soluta amet laudantium obcaecati nam molestiae.</p>
            </div>
          </div>

          <div className='relative p-8'>
            <div className="absolute top-0 right-1/2 translate-x-1/2 h-[1px] w-full bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            <div className='flex flex-col justify-center gap-6'>
              <BiPlusMedical size={25} className='text-blue-accent' />
              <h3 className='text-2xl text-blue-accent'>Medical Collection</h3>
              <p className='text-dark-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis laboriosam dignissimos aliquam vel optio! Soluta amet laudantium obcaecati nam molestiae.</p>
            </div>
          </div>

          <div className='relative p-8'>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[100%] w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
            <div className='flex flex-col justify-center gap-6'>
              <GoLaw size={25} className='text-blue-accent' />
              <h3 className='text-2xl text-blue-accent'>Legal Collection</h3>
              <p className='text-dark-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis laboriosam dignissimos aliquam vel optio! Soluta amet laudantium obcaecati nam molestiae.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParallaxSection;