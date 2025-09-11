'use client'
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from '../../public/img1.jpg'
import img2 from '../../public/img2.jpg'

gsap.registerPlugin(ScrollTrigger);

export default function MovingImages() {

  useEffect(() => {
    const scrollTriggerSettings = {
      trigger: ".main",
      start: 'top 35%',
      toggleActions: 'play reverse play reverse',
    }

    const leftXValues = [-800, -900, -400]
    const rightXValues = [800, 900, 400]
    const leftRotationValues = [-30, -20, -35]
    const rightRotationValues = [30, 20, 35]
    const yValues = [100, -150, -400]

    gsap.utils.toArray('.row').forEach((row, index) => {
      const leftCard = row.querySelector('.card-left')
      const rightCard = row.querySelector('.card-right')
      
      // Combine animations for both cards into a single tween
      gsap.to([leftCard, rightCard], {
        x: (i, target) => target === leftCard ? leftXValues[index] : rightXValues[index],
        y: yValues[index],
        rotation: (i, target) => target === leftCard ? leftRotationValues[index] : rightRotationValues[index],
        opacity: 0,
        scrollTrigger: {
          trigger: ".main",
          start: 'top center',
          end: '150% bottom',
          scrub: true,
        },
      }) 
    })

    gsap.to('.logo', {
      scale: 1,
      duration: 0.5,
      ease: 'power1.out',
      scrollTrigger: scrollTriggerSettings
    })

    gsap.to('.line p', {
      y: 0,
      stagger: 0.1,
      ease: 'power1.out',
      scrollTrigger: scrollTriggerSettings
    })

    gsap.to('button', {
      y: 0,
      opacity: 1,
      delay: 0.25,
      duration: 0.5,
      ease: 'power1.out',
      scrollTrigger: scrollTriggerSettings
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const generaterows = () => {
    const rows = []

    for(let i = 1; i <= 3; i++) {
      rows.push(
        <div className="row w-full" key={i}>
          <div className="card card-left relative">
            <Image src={`/img${2 * i - 1}.jpg`} alt="text" fill className="object-cover" />
          </div>
          <div className="card card-right relative">
            <Image src={`/img${2 * i}.jpg`} alt="text" fill className="object-cover" />
          </div>
        </div>
      )
    }

    return rows
  }

  return (
    <>
      <section className="section hero w-full">
        <div className="img relative">
          <Image src={img1} alt="img" fill />
        </div>
      </section>

      <section className="section main w-full overflow-hidden">
        <div className="main-content">
          <div className="logo relative">
            <Image src={img2} alt="img" fill />
          </div>

          <div className="copy">
            <div className="line">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, vel!</p>
            </div>

            <div className="line">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, vel!</p>
            </div>

            <div className="line">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, vel!</p>
            </div>
          </div>

          <div className="btn">
            <button className="button">get pro</button>
          </div>
        </div>
        {generaterows()}
      </section>
    </>
  );
}