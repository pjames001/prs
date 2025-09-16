'use client'
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import service1Img from "../../public/img1.jpg";
import service2Img from "../../public/img2.jpg";
import service3Img from "../../public/img3.jpg";
import Link from "next/link";

const Services = () => {

  const services = [
    {
      title: "Commercial Collections",
      description:
        "Efficient and professional recovery of outstanding debts while maintaining client relationships.",
      image: service1Img,
    },
    {
      title: "Consumer Collections",
      description:
        "Assessing client creditworthiness to minimize financial risk and optimize collections.",
      image: service2Img,
    },
    {
      title: "Legal Collections",
      description:
        "Providing tailored financial solutions to help businesses regain stability.",
      image: service3Img,
    },
    {
      title: "Medical Collections",
      description:
        "Providing tailored financial solutions to help businesses regain stability.",
      image: service3Img,
    },
  ];

  const sectionRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (hoveredIndex !== null) {
        gsap.to(imageRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power3.out",
        });
      } else {
        gsap.to(imageRef.current, {
          opacity: 0,
          scale: 0.95,
          duration: 0.5,
          ease: "power3.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [hoveredIndex]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full mx-auto px-4 mt-40 sm:px-6 lg:px-12 py-16 space-y-4"
    >
      {services.map((service, i) => (
        <div
          key={i}
          className={`relative block w-full overflow-hidden transition-all duration-600 border-b border-gray-600`}
          style={{
            height: hoveredIndex === i ? "300px" : "80px",
          }}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="absolute inset-0">
            {hoveredIndex === i && (
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover rounded-md brightness-50"
              />
            )}
          </div>

          <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12">
            <h3
              className={`text-xl md:text-2xl font-bold text-blue-accent ${
                hoveredIndex === i ? "text-shadow-lg" : ""
              }`}
            >
              {service.title}
            </h3>
            {hoveredIndex === i && (
              <p className="mt-2 text-gray-200 md:text-lg">
                {service.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Services