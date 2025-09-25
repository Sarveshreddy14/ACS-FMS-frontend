import heroFrame2 from "../assets/about/Frame 1171279053.png";
import servicesFrame from "../assets/about/Rectangle 46.png";
import servicesHeading from "../assets/about/Our Services.png";
import leftBox from "../assets/about/Frame 16.png";
import rightBox from "../assets/about/Frame 17.png";
import testimonialsImg from "../assets/about/Testimonials.png";
import contactBanner from "../assets/about/Property Contact Us.png";
import contactLeftBox from "../assets/about/Frame 1171279042.png";
import contactBg from "../assets/about/section-4.png";
import ourServicesBg from "../assets/about/Rectangle 46.png"; // New background image for Our Services section
// Removed image heading to avoid glow artifacts

export default function About() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative">
        <div className="h-[300px] md:h-[420px] w-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroFrame2})` }} />        <div className="absolute inset-0 bg-ink-900/50" />
        {/* No overlaid text, only image and overlay */}
      </section>

      {/* About Intro - Updated to match provided screenshot */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">About Us</h2>
          {/* Decorative shapes removed as requested */}
          <div className="max-w-4xl mx-auto">
            <p className="mb-6 text-lg text-gray-700">
              At ACS FMS, we believe that every building should be more than just a space — it should be a place where people feel safe, comfortable, and inspired to do their best. As a complete facilities management partner, we focus on creating environments that are well-maintained, efficient, and sustainable.
            </p>
            <p className="mb-6 text-lg text-gray-700">
              By integrating people, processes, and technology, we ensure that day-to-day operations run smoothly while maintaining the highest standards of safety, hygiene, and reliability. Whether it’s ensuring comfort for residents, supporting businesses in their growth, or maintaining critical infrastructure, our goal is to deliver services that bring peace of mind and long-term value.
            </p>
            <p className="text-lg text-gray-700">
              Driven by professionalism, transparency, and innovation, ACS FMS continues to build trust with every client by providing solutions that make life easier and spaces better.
            </p>
          </div>
          {/* Decorative shapes removed as requested */}
        </div>
      </section>

      {/* Why Choose Us - Updated to match provided screenshot */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Row 1 */}
            <div className="rounded-2xl border border-gray-300 p-8 flex flex-col items-center shadow-sm">
              <span className="text-green-400 text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10V6a2 2 0 012-2h2a2 2 0 012 2v4m0 0V6a2 2 0 012-2h2a2 2 0 012 2v4m-8 0h8m-8 0v8a2 2 0 002 2h4a2 2 0 002-2v-8" /></svg>
              </span>
              <h3 className="text-2xl font-bold text-blue-900 mb-2 text-center">Complete Facility Care</h3>
              <p className="text-gray-700 text-center">From cleaning and security to maintenance and landscaping, everything under one roof.</p>
            </div>
            <div className="rounded-2xl border border-gray-300 p-8 flex flex-col items-center shadow-sm">
              <span className="text-green-400 text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm-2 2a2 2 0 100-4 2 2 0 000 4zm-2-2a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4z" /></svg>
              </span>
              <h3 className="text-2xl font-bold text-blue-900 mb-2 text-center">Reliable Expertise</h3>
              <p className="text-gray-700 text-center">Skilled professionals trained to meet the highest industry standards.</p>
            </div>
            <div className="rounded-2xl border border-gray-300 p-8 flex flex-col items-center shadow-sm">
              <span className="text-green-400 text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" /></svg>
              </span>
              <h3 className="text-2xl font-bold text-blue-900 mb-2 text-center">24/7 Support</h3>
              <p className="text-gray-700 text-center">Always available to keep your spaces running smoothly without interruptions.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Row 2 */}
            <div className="rounded-2xl border border-gray-300 p-8 flex flex-col items-center shadow-sm">
              <span className="text-green-400 text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
              </span>
              <h3 className="text-2xl font-bold text-blue-900 mb-2 text-center">Technology-Driven</h3>
              <p className="text-gray-700 text-center">Smart solutions that improve efficiency, safety, and sustainability.</p>
            </div>
            <div className="rounded-2xl border border-gray-300 p-8 flex flex-col items-center shadow-sm">
              <span className="text-green-400 text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m0 0l-4-4m4 4l4-4" /></svg>
              </span>
              <h3 className="text-2xl font-bold text-blue-900 mb-2 text-center">Tailored Solutions</h3>
              <p className="text-gray-700 text-center">Services customized to meet the unique needs of your home, office, or industry.</p>
            </div>
            <div className="rounded-2xl border border-gray-300 p-8 flex flex-col items-center shadow-sm">
              <span className="text-green-400 text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0v8m0 4v4" /></svg>
              </span>
              <h3 className="text-2xl font-bold text-blue-900 mb-2 text-center">Sustainability First</h3>
              <p className="text-gray-700 text-center">Eco-friendly practices that reduce costs and protect the environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section
        id="our-services"
        className="py-20"
        style={{
          background: `#0B1B36 url(${ourServicesBg}) center/cover no-repeat`,
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">Our Services</h2>
          <p className="text-white text-lg md:text-xl text-center max-w-3xl mx-auto mb-10">
            We provide a wide range of Hard and Soft Services to ensure your spaces are safe, efficient, and well-maintained. From infrastructure care to day-to-day upkeep, our expert team delivers reliable solutions for homes, offices, and commercial properties.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Hard Services */}
            <div className="bg-white/5 rounded-xl border border-white/30 p-8 flex flex-col items-center shadow-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-2 text-center">Hard Services</h3>
              <p className="text-white/80 text-center mb-6">
                Our Hard Services take care of the technical and structural needs of your facilities.
              </p>
              <ul className="text-white text-left space-y-4 mb-8 w-full max-w-xs mx-auto">
                <li className="flex items-center gap-2">
                  <span className="text-[#B6FF6C] text-xl">✔</span>
                  <span className="font-semibold">Plumbing Services</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#B6FF6C] text-xl">✔</span>
                  <span className="font-semibold">Fire Protection Services</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#B6FF6C] text-xl">✔</span>
                  <span className="font-semibold">Carpentry Services</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#B6FF6C] text-xl">✔</span>
                  <span className="font-semibold">Electrical Services & Electrical System Services</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#B6FF6C] text-xl">✔</span>
                  <span className="font-semibold">Elevators & Escalators Services</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#B6FF6C] text-xl">✔</span>
                  <span className="font-semibold">Painting and Protective Coating Services</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#B6FF6C] text-xl">✔</span>
                  <span className="font-semibold">AC services</span>
                </li>
              </ul>
              <button className="bg-[#B6FF6C] text-[#0B1B36] font-semibold rounded-md px-8 py-2 text-lg mt-auto">
                Explore More
              </button>
            </div>
            {/* Soft Services */}
            <div className="bg-white/5 rounded-xl border border-white/30 p-8 flex flex-col items-center shadow-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-2 text-center">Soft Services</h3>
              <p className="text-white/80 text-center mb-6">
                Our Soft Services improve the comfort, cleanliness, and safety of your environment.
              </p>
              <ul className="text-white text-left space-y-4 mb-8 w-full max-w-xs mx-auto">
                <li className="flex items-center gap-2">
                  <span className="text-[#B6FF6C] text-xl">✔</span>
                  <span className="font-semibold">Cleaning Services</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#B6FF6C] text-xl">✔</span>
                  <span className="font-semibold">Pest Control Services</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#B6FF6C] text-xl">✔</span>
                  <span className="font-semibold">Garden & Landscaping Services</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#B6FF6C] text-xl">✔</span>
                  <span className="font-semibold">Security Services</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#B6FF6C] text-xl">✔</span>
                  <span className="font-semibold">Driver Facility Services</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#B6FF6C] text-xl">✔</span>
                  <span className="font-semibold">Office Keeping Services</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#B6FF6C] text-xl">✔</span>
                  <span className="font-semibold">House Keeping Services</span>
                </li>
              </ul>
              <button className="bg-[#B6FF6C] text-[#0B1B36] font-semibold rounded-md px-8 py-2 text-lg mt-auto">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Next Section Our mission vision goal */}
      <section className="relative w-full">
        <img
          src={new URL("../assets/about/section-6.png", import.meta.url).pathname}
          alt="Section"
          className="w-full h-auto select-none pointer-events-none"
          style={{ imageRendering: "crisp-edges" }}
        />
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Us - working two-box section over patterned background */}
      <section
        className="py-16"
        style={{ backgroundImage: `url(${contactBanner})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="container">
          <h2 className="text-3xl font-bold text-[#0B1B36] mb-4 text-center">Contact Us</h2>
          <div className="flex justify-center w-full mb-10">
            <p className="max-w-3xl text-center text-[#0B1B36] text-lg font-semibold">
              We’re here to help you with all your facility management needs. Whether it’s cleaning, pest control, plumbing, or complete maintenance solutions, our support team is just a call or click away. Reach out to us today and let our trained professionals make your space hassle-free.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left: Touch With Us form */}
            <div className="rounded-2xl p-8 shadow-lg border border-white/30 bg-gradient-to-br from-[#4B5C7B] to-[#6C7A97] max-w-md w-full mx-auto md:mx-0">
              <h3 className="text-2xl font-bold text-white text-center mb-6">Touch With Us</h3>
              <form className="space-y-6">
                <div className="flex gap-4">
                  <input type="text" placeholder="First Name *" className="flex-1 bg-transparent border-b border-white text-white px-2 py-2 focus:outline-none" />
                  <input type="text" placeholder="Last Name *" className="flex-1 bg-transparent border-b border-white text-white px-2 py-2 focus:outline-none" />
                </div>
                <input type="email" placeholder="Email id *" className="w-full bg-transparent border-b border-white text-white px-2 py-2 focus:outline-none" />
                <input type="tel" placeholder="Phone Number *" className="w-full bg-transparent border-b border-white text-white px-2 py-2 focus:outline-none" />
                <select className="w-full bg-transparent border-b border-white text-white px-2 py-2 focus:outline-none appearance-none">
                  <option value="" className="text-black">Select Services *</option>
                  <option value="hard" className="text-black">Hard Services</option>
                  <option value="soft" className="text-black">Soft Services</option>
                </select>
                <textarea placeholder="Message *" className="w-full bg-transparent border-b border-white text-white px-2 py-2 focus:outline-none" rows="2"></textarea>
                <div className="flex justify-center mt-8">
                  <button type="submit" className="bg-[#c6e425] text-white font-semibold px-12 py-3 rounded-full shadow-md hover:bg-[#b2d91e] transition">Submit</button>
                </div>
              </form>
            </div>
            {/* Right: Info card */}
            <div className="rounded-2xl p-8 shadow-lg bg-[#0D223A] text-white max-w-md w-full mx-auto md:mx-0">
              <div className="text-center">
                <div className="font-semibold text-xl mb-2">Our Address</div>
                <div className="mb-4 text-base text-white/90">
                  ACR Facility Management Services<br />123, Heritage Street, Hyderabad, India
                </div>
                <div className="font-semibold text-xl mb-2">Contact Information</div>
                <div className="mb-4 text-base text-white/90">
                  Phone: +91 98765 43210<br />Email: info@acsfms.com
                </div>
                <div className="font-semibold text-xl mb-2">Timings</div>
                <div className="text-base text-white/90">
                  Monday – Saturday: 10:00 AM – 11:00 PM<br />Sunday: Closed
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Auto Sliding */}
      
    </>
  );
}

// Testimonials Component
import { useState, useEffect } from "react";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Priya S., Hyderabad",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      text: "The team was on time, polite, and did an amazing job! My home feels fresh and spotless. Highly recommended!",
    },
    {
      id: 2,
      name: "Karan S., Banglore",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: "The team was on time, polite, and did an amazing job! My home feels fresh and spotless. Highly recommended!",
    },
    {
      id: 3,
      name: "Amit R., Pune",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      text: "The team was on time, polite, and did an amazing job! My home feels fresh and spotless. Highly recommended!",
    },
    {
      id: 4,
      name: "Neha T., Mumbai",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5,
      text: "The team was on time, polite, and did an amazing job! My home feels fresh and spotless. Highly recommended!",
    },
    {
      id: 5,
      name: "Ravi K., Chennai",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
      rating: 5,
      text: "The team was on time, polite, and did an amazing job! My home feels fresh and spotless. Highly recommended!",
    },
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 2000); // 2 sec gap between slides
    return () => clearInterval(interval);
  }, []);

  // Helper to render stars
  const renderStars = (count) => (
    <div className="flex justify-center mb-4">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
      ))}
    </div>
  );

  return (
    <section className="relative w-full py-20 bg-[#10213A] overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0H1440V600H0V0Z" fill="#10213A"/>
          <path d="M0 400C200 200 400 0 720 100C1040 200 1240 400 1440 600V0H0V400Z" fill="#16294A"/>
        </svg>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">What Our Clients Say About Us</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Previous testimonial (left) */}
          <div className="hidden md:flex flex-col items-center w-1/3 opacity-60">
            {renderStars(testimonials[(current + testimonials.length - 1) % testimonials.length].rating)}
            <p className="text-lg text-white text-center mb-6">{testimonials[(current + testimonials.length - 1) % testimonials.length].text}</p>
            <div className="flex flex-col items-center mt-4">
              <img src={testimonials[(current + testimonials.length - 1) % testimonials.length].avatar} alt={testimonials[(current + testimonials.length - 1) % testimonials.length].name} className="w-14 h-14 rounded-full object-cover mb-2 border-4 border-white" />
              <span className="text-white/80 text-base">{testimonials[(current + testimonials.length - 1) % testimonials.length].name}</span>
            </div>
          </div>
          {/* Current testimonial (center) */}
          <div className="flex flex-col items-center w-full md:w-1/3">
            <img src={testimonials[current].avatar} alt={testimonials[current].name} className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-white" />
            <span className="text-white text-lg font-semibold mb-2">{testimonials[current].name}</span>
            {renderStars(testimonials[current].rating)}
            <p className="text-xl text-white text-center mb-6">{testimonials[current].text}</p>
          </div>
          {/* Next testimonial (right) */}
          <div className="hidden md:flex flex-col items-center w-1/3 opacity-60">
            {renderStars(testimonials[(current + 1) % testimonials.length].rating)}
            <p className="text-lg text-white text-center mb-6">{testimonials[(current + 1) % testimonials.length].text}</p>
            <div className="flex flex-col items-center mt-4">
              <img src={testimonials[(current + 1) % testimonials.length].avatar} alt={testimonials[(current + 1) % testimonials.length].name} className="w-14 h-14 rounded-full object-cover mb-2 border-4 border-white" />
              <span className="text-white/80 text-base">{testimonials[(current + 1) % testimonials.length].name}</span>
            </div>
          </div>
        </div>
        {/* Dots navigation */}
        <div className="flex justify-center mt-10 gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`w-5 h-5 rounded-full focus:outline-none transition-colors duration-300 ${idx === current ? 'bg-white' : 'bg-white/40'}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


