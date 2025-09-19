'use client'
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import service1Img from "../../public/img1.jpg";
import service2Img from "../../public/img2.jpg";
import service3Img from "../../public/img3.jpg";

const Services = () => {

  const services = [
    {
      title: "Commercial Collections",
      description:
        "To maximize results and minimize business disruptions, MJ Maguire And Associates works closely with each client to create a customized debt collection strategy. Our team has a deep understanding of the commercial debt collection process, allowing us to expertly handle various industries and debt types—from overdue payments to outstanding balances. We can guide you from initial negotiations to legal action, if needed, by a contracted attorney.",
      image: service1Img,
    },
    {
      title: "Consumer Collections",
      description:
        "At MJ Maguire And Associates, we have a long, successful history as a retail collection agency across all industries, and we take pride in our reputation for excellent customer service.We ensure full compliance with the Federal Fair Debt Collection Practices Act (FDCPA), the Fair Credit Reporting Act (FCRA), and all state and local regulations. Our highly trained and licensed professionals receive continuous training to strictly adhere to these laws. We also work with retail accounts as often as legally allowed and report collection items to all major credit bureaus.",
      image: service2Img,
    },
    {
      title: "Legal Collections",
      description:
        "MJ Maguire And Associates is not a law firm but works with contracted attorneys who can pursue your legal collections to the full extent of the law. Once we approve your case, you'll receive a Creditor's Declaration or Substitution of Attorney form to begin the process. If you want a full-service option for your legal collections, our professionals are ready to help.We have extensive experience with both commercial and retail collections. Whether you're a law firm, a large corporation with a full collection portfolio, or an individual with a single account, we have the knowledge and resources to assist you.",
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
      className="relative w-full mx-auto px-4 mt-16 sm:px-6 lg:px-12 py-16 space-y-4"
    >
      {services.map((service, i) => (
        <div
          key={i}
          className={`relative block w-full overflow-hidden transition-all duration-600 border-b border-gray-600`}
          style={{
            height: hoveredIndex === i ? "500px" : "80px",
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
                priority={true}
                className="object-cover rounded-md brightness-50"
              />
            )}
          </div>

          <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12">
            <h3
              className={`text-xl md:text-5xl font-bold text-blue-accent ${
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

