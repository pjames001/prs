'use client'
import { useState, useRef, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

// Testimonial data
const testimonials = [
  {
    quote: "Facing overwhelming debt was stressful, but this agency was incredibly professional and compassionate. They helped me find a manageable solution and gave me peace of mind. I'm back on track now, thanks to them.",
    author: "Jessica Williams",
    role: "Small Business Owner",
    image: "https://placehold.co/100x100/A1A1AA/ffffff?text=JW"
  },
  {
    quote: "I was skeptical at first, but the team here was patient and non-judgmental. They explained everything clearly and worked with me to create a plan that actually worked for my budget. Their support made all the difference.",
    author: "David Rodriguez",
    role: "Freelance Graphic Designer",
    image: "https://placehold.co/100x100/A1A1AA/ffffff?text=DR"
  },
  {
    quote: "Thanks to their guidance, I was able to resolve my outstanding accounts without any hassle. The communication was excellent, and the process was smooth. It's a huge relief to have this behind me.",
    author: "Maria Sanchez",
    role: "Financial Analyst",
    image: "https://placehold.co/100x100/A1A1AA/ffffff?text=MS"
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const testimonialRef = useRef(null);

  // Auto-slide functionality
  useEffect(() => {
    let interval;
    if (!isHovering) {
      interval = setInterval(() => {
        setFading(true);
        setTimeout(() => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 500);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isHovering]);

  useEffect(() => {
    setFading(false);
  }, [activeIndex]);

  const handleNext = () => {
    setFading(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 500); // Match with transition duration
  };

  const handlePrev = () => {
    setFading(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }, 500); // Match with transition duration
  };

  const { quote, author, role, image } = testimonials[activeIndex];

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div
        className="w-full max-w-4xl px-4 py-12 md:py-20"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-gray-200 leading-tight mb-8">
          What Our Clients Say
        </h2>
        <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden p-6 sm:p-10">
          {/* Testimonial Content */}
          <div ref={testimonialRef} className={`flex-grow text-center transition-opacity duration-500 ease-in-out ${fading ? 'opacity-0' : 'opacity-100'}`}>
            <p className="text-lg sm:text-xl lg:text-2xl italic text-dark-text leading-relaxed mb-6">
              &ldquo;{quote}&rdquo;
            </p>
            <div className="flex flex-col items-center">
              <img
                src={image}
                alt={author}
                className="w-16 h-16 rounded-full object-cover border-4 border-indigo-500 dark:border-indigo-400 mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {author}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {role}
              </p>
            </div>
          </div>
          {/* Navigation Buttons */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <IoIosArrowBack size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 cursor-pointer"
              aria-label="Next testimonial"
            >
              <IoIosArrowForward size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
