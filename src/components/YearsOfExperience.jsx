'use client'
import { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import Image from "next/image";
import Button from './Button';


const YearsOfExperience = ({title, text1, text2, text3, image}) => {

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          once: true
        },
      });

      tl.from(titleRef.current, {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          textRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          imageRef.current,
          {
            opacity: 0,
            x: 80,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-24 gap-12"
    >
      {/* Text Section */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h2
          ref={titleRef}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-700"
        >
          {title}
        </h2>
        <div ref={textRef}>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl my-4 mx-auto md:mx-0">
            {text1}
          </p>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl my-4 mx-auto md:mx-0">
            {text2}
          </p>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl my-4 mx-auto md:mx-0">
            {text3}
          </p>
        </div>
        
        <Button link='/contact' text='Learn More' />
      </div>

      {/* Image Section */}
      <div
        ref={imageRef}
        className="lg:flex-1 relative w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem]"
      >
        <Image
          src={image}
          alt="Animated visual"
          fill
          className="rounded-2xl object-cover shadow-xl"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>
  )
}

export default YearsOfExperience