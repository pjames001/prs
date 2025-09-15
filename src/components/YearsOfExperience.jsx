'use client'
import { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import Image from "next/image";
import img from '../../public/img5.jpg'

const YearsOfExperience = () => {

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
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-text"
        >
          With Over Than 40 Years of Experience
        </h2>
        <p
          ref={textRef}
          className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto md:mx-0"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aspernatur tempora harum sed corporis officia enim! Doloribus facilis saepe laudantium magni libero numquam consequuntur labore sequi nostrum cupiditate reprehenderit, iure explicabo laborum rerum, vero itaque magnam, odit officia architecto voluptate?
        </p>
      </div>

      {/* Image Section */}
      <div
        ref={imageRef}
        className="lg:flex-1 relative w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem]"
      >
        <Image
          src={img}
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