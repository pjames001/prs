"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import Image from "next/image";
import ShinyText from "./ShinyText";

const PagesHeaders = ({image, text, description}) => {
  const backgroundImageUrl = image
  const zoomingImageUrl =
    "/pages.png";

  useEffect(() => {

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        markers: false,
      },
    });

    timeline
      .to(".pages-header-image", {
        scale: 40,
        z: 350,
        transformOrigin: "center center",
        ease: "power1.inOut",
      })
      .to(
        ".pages-section.pages-hero",
        {
          scale: 1.1,
          transformOrigin: "center center",
          ease: "power1.inOut",
        },
        "<"
      );

    // Cleanup function to prevent memory leaks by killing the timeline and trigger
    return () => {
      if (timeline) {
        timeline.kill();
      }
    };
  }, []);

  return (
    <motion.div 
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.75 }}
      className="relative w-full wrapper"
    >
      {/* Hero Section */}
      <section
        className="relative w-full h-screen pages-hero pages-section overflow-hidden z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(3, 7, 15, 0.6), rgba(3, 7, 15, 0.6)), url('${backgroundImageUrl}')`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h2 className="text-white md:text-2xl text-md absolute bottom-1/4 md:left-[35%] left-8">
        {description}
        </h2>

        {/* Foreground image + shiny text */}
        <div className="absolute inset-0 z-20">
          <Image
            src={zoomingImageUrl}
            alt="foreground image"
            fill
            priority
            className="pages-header-image object-cover md:object-top-right object-[50%_-20px]"
          />
          <ShinyText
            text={text}
            className="absolute bottom-1/2 md:left-[25%] left-20 translate-y-1/2 md:text-9xl text-7xl text-dark-text/60 font-extrabold"
          />
        </div>
      </section>
    </motion.div>
  );
};

export default PagesHeaders;
