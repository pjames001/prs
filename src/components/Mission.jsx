'use client'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBullseye, FaEye } from "react-icons/fa";

const Mission = () => {

  const sectionRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(missionRef.current, {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(visionRef.current, {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: visionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-24 flex flex-col md:flex-row gap-12 items-center"
    >
      {/* Mission */}
      <div
        ref={missionRef}
        className="flex-1 bg-gray-100 p-8 rounded-2xl shadow-md shadow-black text-center md:text-left space-y-4"
      >
        <div className="text-4xl text-blue-accent mx-auto md:mx-0">
          <FaBullseye />
        </div>
        <h3 className="text-2xl font-bold text-gray-700">
          Our Mission
        </h3>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">To help businesses recover outstanding debts efficiently and professionally, while maintaining strong relationships with clients and ensuring fair treatment for debtors.
        </p>
      </div>

      {/* Vision */}
      <div
        ref={visionRef}
        className="flex-1 bg-gray-100 p-8 rounded-2xl shadow-md shadow-black text-center md:text-left space-y-4"
      >
        <div className="text-4xl text-blue-accent mx-auto md:mx-0">
          <FaEye />
        </div>
        <h3 className="text-2xl font-bold text-gray-700">
          Our Vision
        </h3>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">To be the leading debt recovery agency recognized for integrity, transparency, and results, helping businesses regain financial stability while upholding ethical practices.
        </p>
      </div>
    </section>
  )
}

export default Mission