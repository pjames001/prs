'use client'
import gsap from 'gsap';
import { useEffect, useState } from 'react';
import { CiMail } from "react-icons/ci"
import { MdOutlinePhoneIphone } from "react-icons/md"

const Form = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  useEffect(() => {
    // GSAP animation for the background gradient
    gsap.to('.gradient-bg', {
      duration: 15,
      '--tw-gradient-from': '#0f172a', // Tailwind's slate-900
      '--tw-gradient-to': '#0c4a6e', // Tailwind's light-blue
      ease: 'power1.inOut',
      yoyo: true, // Reverses the animation
      repeat: -1, // Repeats indefinitely
    });

    // GSAP animation for the form elements
    gsap.from('.stagger-in', {
      duration: 1,
      y: 30,
      opacity: 0,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.5,
    });
  }, []);

  const handleChange = e => {
    const {name, value} = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('submitted form')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="relative min-h-screen overflow-hidden text-white">

      {/* Animated Background */}
      <div className="absolute inset-0 z-0 bg-dark-blue"></div>

      <div className="relative z-10 flex flex-col lg:flex-row h-full lg:min-h-screen">
        {/* Left Side: Contact Info & Gradient */}
        <div className="w-full lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center items-start  backdrop-blur-sm ">
          <div className="stagger-in text-6xl font-extrabold text-dark-text leading-tight">
            Let's build something <br /> amazing together.
          </div>
          <p className="stagger-in mt-6 text-xl text-gray-300">
            Reach out to discuss your project, ask a question, or just say hello.
          </p>

          <div className="stagger-in mt-12 space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-blue-400">
               <CiMail size={20} />
              </span>
              <a href="mailto:contact@example.com" className="hover:text-blue-300 transition-colors">
                contact@example.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-blue-400">
                <MdOutlinePhoneIphone size={20} />
              </span>
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-20 flex flex-col justify-center  backdrop-blur-sm">
          <form className="space-y-6">
            <h2 className="stagger-in text-3xl font-bold text-blue-accent mb-6">
              Send a Message
            </h2>
            <div className="stagger-in">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input 
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 bg-transparent border-b border-white focus:outline-none focus:ring-2 focus:ring-blue-accent transition-all duration-300 ease"
               />
            </div>
            <div className="stagger-in">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input 
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 bg-transparent border-b border-white focus:outline-none focus:ring-2 focus:ring-blue-accent transition-all duration-300 ease" 
              />
            </div>
            <div className="stagger-in">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea 
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 bg-transparent border-b border-white focus:outline-none focus:ring-2 focus:ring-blue-accent transition-all duration-300 ease resize-none"></textarea>
            </div>
            <div className="stagger-in">
              <button type="submit" className="w-full py-4 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form