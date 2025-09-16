"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";


// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PagesHeaders = ({ image, text, description }) => {
  const containerRef = useRef(null);
  const foregroundImgRef = useRef(null);
  const backgroundDivRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Select all the elements and a dummy element for the scroll
    const foregroundImg = foregroundImgRef.current;
    const backgroundDiv = backgroundDivRef.current;
    const text = textRef.current;

    // Use a timeline to orchestrate the animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top", // When the top of the container hits the top of the viewport
        end: "bottom+=1000px top", // Increase the scroll distance
        scrub: 1, // Smoothly link animation to scroll
        pin: true, // Pin the container while scrolling
        // markers: true, // Uncomment for debugging
      },
    });

    // Animate the foreground image: scale up
    tl.to(
      foregroundImg,
      {
        scale: 45, // Zoom in effect
        duration: 1,
        ease: "power2.inOut",
      },
      "start"
    );
    
    // Animate the text: fade in and scale up
    tl.fromTo(
      text,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
      },
      "<0.2" // Start this animation a bit before the previous one ends
    );

    // Clean up function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Container for the pinned animation */}
      <div ref={containerRef} className="relative w-screen h-screen overflow-hidden">
        {/* Background image and text */}
       
        <div ref={backgroundDivRef} className="absolute inset-0 z-0">
          <Image
            src={image}
            alt="Background"
            fill
            sizes="100vw"
            className="object-cover transition-opacity duration-500"
            priority // Make sure this is also prioritized for LCP
          />
        </div>

        {/* Text over images */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
            <div ref={textRef} className="text-white text-center p-4 bg-black/30 backdrop-blur-sm rounded-lg">
                <h1 className="text-5xl md:text-7xl font-bold">{text}</h1>
                <p className="text-white text-center md:text-5xl text-3xl mt-10">{description}</p>
            </div>
        </div>

        {/* Foreground image */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Image
            ref={foregroundImgRef} 
            src="/pages.png"
            alt="Foreground"
            sizes="100vw"
            fill
            className="w-full h-full object-cover md:object-top-right object-[50%_15px]"
          />
        </div>
      </div>

      {/* Placeholder content to enable scrolling */}
      <div className="w-full md:h-[200vh] h-[250vh] flex items-center justify-center bg-white"></div>
    </div>
  );
}

export default PagesHeaders;