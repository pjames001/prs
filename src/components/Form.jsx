"use client";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhoneIphone } from "react-icons/md";

const Form = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    fullName: "",
    position: "",
    business: "",
    state: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  useEffect(() => {
    // GSAP animation for the background gradient
    gsap.to(".gradient-bg", {
      duration: 15,
      "--tw-gradient-from": "#0f172a", // Tailwind's slate-900
      "--tw-gradient-to": "#0c4a6e", // Tailwind's light-blue
      ease: "power1.inOut",
      yoyo: true, // Reverses the animation
      repeat: -1, // Repeats indefinitely
    });

    // GSAP animation for the form elements
    gsap.from(".stagger-in", {
      duration: 1,
      y: 30,
      opacity: 0,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.5,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Remove all non-digit characters for processing, but keep the '+' if it's at the start
      let cleanedValue = value.replace(/[^\d+]/g, "");

      // Ensure it starts with '+1'
      if (!cleanedValue.startsWith("+1")) {
        cleanedValue = "+1" + cleanedValue.replace(/^\+/, ""); // Add +1 if missing, remove any other leading +
      }

      // Remove the '+1' for formatting the digits
      let digits = cleanedValue.substring(2).replace(/\D/g, ""); // Get digits after '+1'

      let formattedValue = "+1";

      if (digits.length > 0) {
        formattedValue += " "; // Add space after +1

        // Add first 3 digits
        if (digits.length > 0) {
          formattedValue += digits.substring(0, 3);
        }
        // Add first hyphen
        if (digits.length > 3) {
          formattedValue += "-";
          formattedValue += digits.substring(3, 6);
        }
        // Add second hyphen
        if (digits.length > 6) {
          formattedValue += "-";
          formattedValue += digits.substring(6, 10);
        }
      }

      // Limit to the length of "+1 XXX-XXX-XXXX" (15 characters)
      setFormData((prev) => ({
        ...prev,
        [name]: formattedValue.substring(0, 15),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Email sent successfully!");
        setFormData({
          companyName: "",
          fullName: "",
          position: "",
          business: "",
          state: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("something went wrong");
        console.error(
          "Form submission failed:",
          data.message || "Unknown error occurred."
        );
      }
    } catch (error) {
      console.error("An error occurred during form submission:", error.message);
    }

    
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <div className="relative z-10 flex flex-col lg:flex-row items-start h-full lg:min-h-screen mt-10">
        {/* Left Side: Contact Info & Gradient */}
        <div className="w-full lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center items-start">
          <div className="stagger-in text-6xl font-extrabold text-gray-700 leading-tight">
            Let's build something <br /> amazing together.
          </div>
          <p className="stagger-in mt-6 text-xl text-gray-600">
            Reach out to discuss your project, ask a question, or just say
            hello.
          </p>

          <div className="stagger-in mt-12 space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-blue-accent">
                <MdOutlineEmail size={20} />
              </span>
              <a href="mailto:contact@example.com" className="text-blue-accent">
                contact@example.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-blue-accent">
                <MdOutlinePhoneIphone size={20} />
              </span>
              <span className="text-blue-accent">+1 (555) 123-4567</span>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-20 flex flex-col justify-center">
          <form className="space-y-6">
            <div className="stagger-in">
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-600"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 bg-transparent border-b border-gray-500 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-accent transition-all duration-300 ease"
              />
            </div>
            <div className="stagger-in">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-600"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 bg-transparent border-b border-gray-500 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-accent transition-all duration-300 ease"
              />
            </div>
            <div className="stagger-in">
              <label
                htmlFor="position"
                className="block text-sm font-medium text-gray-600"
              >
                Position
              </label>
              <select
                name="position"
                id="position"
                onChange={handleChange}
                value={formData.position}
                required
                className="mt-1 block w-full px-4 py-3 bg-transparent border-b border-gray-500 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-accent transition-all duration-300 ease"
              >
                <option value="" disabled>
                  Select Your Position
                </option>
                <option value="owner">Owner/CEO</option>
                <option value="manager">Manager</option>
                <option value="director">Director</option>
                <option value="accountant">Accountant</option>
                <option value="attorney">Attorney</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="stagger-in">
              <label
                htmlFor="business"
                className="block text-sm font-medium text-gray-600"
              >
                Type Of Business
              </label>
              <input
                type="text"
                id="business"
                name="business"
                value={formData.business}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 bg-transparent border-b border-gray-500 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-accent transition-all duration-300 ease"
              />
            </div>
            <div className="stagger-in">
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-600"
              >
                State
              </label>
              <select
                name="state"
                id="state"
                onChange={handleChange}
                value={formData.state}
                required
                className="mt-1 block w-full px-4 py-3 bg-transparent border-b border-gray-500 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-accent transition-all duration-300 ease"
              >
                <option value="" disabled>
                  Select Your State
                </option>
                {states.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="stagger-in">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-600"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 bg-transparent border-b border-gray-500 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-accent transition-all duration-300 ease"
              />
            </div>
            <div className="stagger-in">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 bg-transparent border-b border-gray-500 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-accent transition-all duration-300 ease"
              />
            </div>
            <div className="stagger-in">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-600"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 bg-transparent border-b border-gray-500 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-accent transition-all duration-300 ease"
              />
            </div>
            <div className="stagger-in">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 bg-transparent border-b border-gray-500 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-accent transition-all duration-300 ease resize-none"
              ></textarea>
            </div>

            {/* Honeypot field (hidden from real users but visible to bots) */}
            <div style={{ position: "absolute", left: "-9999px" }}>
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                autoComplete="off"
                tabIndex="-1"
              />
            </div>
            <div className="stagger-in">
              <button
                onClick={handleSubmit}
                type="submit"
                className="w-full py-4 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
