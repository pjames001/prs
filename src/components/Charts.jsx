"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Charts() {
  const sectionRef = useRef(null);
  const numbersRef = useRef([]);
  const barsRef = useRef([[], [], []]); // three charts

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate numbers
      numbersRef.current.forEach((num) => {
        const target = +num.dataset.target;
        gsap.fromTo(
          num,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            ease: "power1.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );
      });

      // Animate bars for each chart
      barsRef.current.forEach((bars) => {
        if (!bars.length) return;
        const container = bars[0].parentElement;

        const updateBars = () => {
          const containerHeight = container.clientHeight;
          const containerWidth = container.clientWidth;
          const barWidth = 1; 
          const maxBarHeight = containerHeight;

          bars.forEach((bar, i) => {
            bar.style.width = `${barWidth}px`;
          });

          gsap.fromTo(
            bars,
            { height: 0 },
            {
              height: (i) => `${((i + 1) / bars.length) * maxBarHeight}px`,
              duration: 0.5,
              ease: "power2.out",
              stagger: 0.05,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
              },
            }
          );
        };

        updateBars();

        // Recalculate on window resize for responsiveness
        window.addEventListener("resize", updateBars);
        return () => window.removeEventListener("resize", updateBars);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-dark-blue text-white py-16 px-4 md:px-12"
    >
      <h1 className="text-4xl text-gray-300 text-center font-light my-10">Our Impact In Numbers</h1>
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* debts collected */}
        <div className="bg-[#0a0a0a] p-6 relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[120%] w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
          <h3 className="text-xl text-gray-300 font-semibold">Debts Collected Till This Day</h3>
          <p
            ref={(el) => (numbersRef.current[0] = el)}
            data-target="20000000"
            className="text-3xl md:text-4xl font-light text-[#4d7dfc]"
          >
          </p>
          <div className="flex items-end gap-5 absolute bottom-6 h-40 w-full">
            {Array.from({ length: 25 }).map((_, i) => (
              <div
                key={i}
                ref={(el) => (barsRef.current[0][i] = el)}
                className="flex-shrink-0 bg-gradient-to-t from-transparent to-white/70 rounded"
              ></div>
            ))}
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[120%] w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-1">
          {/* agents */}
          <div className="bg-[#0a0a0a] p-6 relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[120%] w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
            <h3 className="text-xl text-gray-300 font-semibold">Agents</h3>
            <p
              ref={(el) => (numbersRef.current[1] = el)}
              data-target="300"
              className="text-3xl md:text-4xl font-light text-[#4d7dfc]"
            >
            </p>
            <div className="flex items-end gap-5 mt-6 h-32 w-full">
              {Array.from({ length: 25 }).map((_, i) => (
                <div
                  key={i}
                  ref={(el) => (barsRef.current[1][i] = el)}
                  className="flex-shrink-0 bg-gradient-to-t from-transparent to-white/70 rounded"
                ></div>
              ))}
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[120%] w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
            <div className="absolute right-1/2 bottom-0 translate-x-1/2 w-[120%] h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
          </div>

          {/* companies helped */}
          <div className="bg-[#0a0a0a] p-6 relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[120%] w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
            <h3 className="text-xl text-gray-300 font-semibold">Companies Helped</h3>
            <p
              ref={(el) => (numbersRef.current[2] = el)}
              data-target="5000"
              className="text-3xl md:text-4xl font-light text-[#4d7dfc]"
            >
              +256%
            </p>
            <div className="flex items-end gap-5 mt-6 h-32 w-full">
              {Array.from({ length: 25 }).map((_, i) => (
                <div
                  key={i}
                  ref={(el) => (barsRef.current[2][i] = el)}
                  className="flex-shrink-0 bg-gradient-to-t from-transparent to-white/70 rounded"
                ></div>
              ))}
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[120%] w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
            <div className="absolute right-1/2 top-0 translate-x-1/2 w-[120%] h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
    </section>
  );
}
