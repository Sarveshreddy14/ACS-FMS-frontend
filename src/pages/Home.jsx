import HeroCarousel from "../components/HeroCarousel.jsx";
import FAQ from "../components/FAQ.jsx";
import FloatingActions from "../components/FloatingActions.jsx";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";
import wood from "../assets/wood-bg.jpg";
import EndToEndFacility from "../assets/End-to-End_facility.jpg";
import ourServicesBg from "../assets/our_services_bg.png";
import newsletterImg from "../assets/newsletter.png";
import contactBanner from "../assets/our_services_bg.png"; // or use a suitable background, or remove if not needed
import propertyContactBg from "../assets/Property Contact Us.jpg";
import { useState, useEffect } from "react";


export default function Home() {
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
    }, 4000); // 4 sec gap between slides
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Helper to render stars
  const renderStars = (count) => (
    <div className="flex justify-center mb-4">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/>
        </svg>
      ))}
    </div>
  );

  return (
    <>
      <HeroCarousel />

      {/* End-to-End Facility Solutions */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* LEFT: Text */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">End-to-End Facility Solutions</h2>
            <p className="mt-3 max-w-3xl text-gray-800 text-base md:text-lg mb-4">
              At ACS FMS, we don’t just provide services – we create environments where businesses and communities thrive. With a perfect blend of people, processes, and technology, we ensure that every corner of your facility is maintained with precision and care. From daily housekeeping and pest control to security, landscaping, and technical maintenance, we cover all aspects of facility management under one trusted partner.
            </p>
            <p className="max-w-3xl text-gray-800 text-base md:text-lg">
              ACS FMS offers a wide spectrum of hard and soft services tailored to meet the unique needs of homes, offices, and industries. Each service is designed to provide maximum efficiency, safety, and comfort while supporting sustainability and cost-effectiveness.
            </p>
          </div>
          {/* RIGHT: Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src={EndToEndFacility}
              alt="End-to-End Facility Solutions"
              className="w-[340px] md:w-[420px] lg:w-[480px] rounded-full object-cover shadow-lg"
              style={{ aspectRatio: "1 / 1" }}
            />
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about-us" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-6">About Us</h2>
          <p className="text-gray-800 text-base md:text-lg text-center max-w-4xl mx-auto mb-4">
            At ACS FMS, we believe that every building should be more than just a space — it should be a place where people feel safe, comfortable, and inspired to do their best. As a complete facilities management partner, we focus on creating environments that are well-maintained, efficient, and sustainable.
          </p>
          <p className="text-gray-800 text-base md:text-lg text-center max-w-4xl mx-auto mb-4">
            By integrating people, processes, and technology, we ensure that day-to-day operations run smoothly while maintaining the highest standards of safety, hygiene, and reliability. Whether it’s ensuring comfort for residents, supporting businesses in their growth, or maintaining critical infrastructure, our goal is to deliver services that bring peace of mind and long-term value.
          </p>
          <p className="text-gray-800 text-base md:text-lg text-center max-w-4xl mx-auto">
            Driven by professionalism, transparency, and innovation, ACS FMS continues to build trust with every client by providing solutions that make life easier and spaces better.
          </p>
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


      {/* BLOGS (inline on Home) */}
<section id="blogs" className="section">
  <div
    className="
      container grid gap-10 md:grid-cols-2 items-center
      rounded-3xl p-6 md:p-10 relative
      bg-cover bg-center
    "
    style={{ backgroundImage: `url(${wood})` }}
  >
    {/* overlay for contrast; delete if no bg image */}
    <div className="absolute inset-0 bg-black/40 rounded-3xl pointer-events-none" />

    {/* LEFT: text */}
    <div className="relative z-[1] text-white">
      <h2 className="text-4xl md:text-5xl font-semibold text-white">Blogs</h2>
      <p className="mt-4 max-w-xl leading-relaxed text-white/90">
        Stay updated with the latest insights on cleaning, facility management, and maintenance services.
        Our blogs go beyond the basics, offering expert tips, innovative practices, and real-life solutions
        to help you maintain a clean, safe, and organized environment. Explore our articles and discover
        smarter ways to manage your home, office, or facility stress-free.
      </p>
      <a
        href="#"
        className="mt-6 inline-flex items-center justify-center rounded-xl px-5 py-2.5 bg-[#7AC943] text-black font-medium"
      >
        View
      </a>
    </div>

    {/* RIGHT: photo collage */}
    <div className="relative z-[1]">
      <div className="relative mx-auto w-[320px] sm:w-[380px] md:w-[440px] lg:w-[520px]">
        {/* TL (tall portrait) */}
        <img
          src={person1}
          className="
            absolute left-0 top-0
            w-[140px] h-[200px] sm:w-[160px] sm:h-[230px] md:w-[190px] md:h-[270px] lg:w-[220px] lg:h-[310px]
            object-cover rounded-[28px] shadow-xl ring-1 ring-black/10
          "
        />

        {/* TR (square) */}
        <img
          src={person2}
          className="
            absolute right-0 top-2
            w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] md:w-[200px] md:h-[200px] lg:w-[230px] lg:h-[230px]
            object-cover rounded-[28px] shadow-xl ring-1 ring-black/10
          "
        />

        {/* BL (wide rounded rectangle) */}
        <img
          src={person3}
          className="
            absolute left-10 sm:left-12 bottom-0
            w-[190px] h-[160px] sm:w-[220px] sm:h-[180px] md:w-[260px] md:h-[210px] lg:w-[300px] lg:h-[240px]
            object-cover rounded-[28px] shadow-xl ring-1 ring-black/10
          "
        />

        {/* BR (small portrait) */}
        <img
          src={person4}
          className="
            absolute right-2 md:right-4 bottom-4
            w-[120px] h-[150px] sm:w-[130px] sm:h-[160px] md:w-[150px] md:h-[180px] lg:w-[170px] lg:h-[200px]
            object-cover rounded-[28px] shadow-xl ring-1 ring-black/10
          "
        />

        {/* spacer to define the collage height */}
        <div className="invisible h-[340px] sm:h-[380px] md:h-[440px] lg:h-[520px]" />
      </div>
    </div>
  </div>
</section>

      {/* FAQ Section - styled as in the pasted images */}
      <section id="faq" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">Frequently Asked Questions</h2>
          <p className="text-gray-700 text-base md:text-lg mb-6 max-w-2xl">
            Have questions in mind? We’ve got you covered! Here are some of the most common queries our customers ask before booking our services. If you don’t find your question here, feel free to reach out to us directly
          </p>
          <div className="relative mt-6">
            {/* FAQ Carousel */}
            <input type="radio" name="faq-carousel" id="faq-1" className="peer/f1 hidden" defaultChecked />
            <div className="peer-checked/f1:block hidden relative rounded-2xl border border-slate-200 bg-[#FFA000] p-6 md:p-8 shadow-sm text-white max-w-md" style={{ minHeight: 260 }}>
              <h3 className="text-xl md:text-2xl font-semibold">What is the step-by-step process of booking a service?</h3>
              <p className="mt-3">
                Booking is quick and simple. You just need to select the required service on our website or app, click on the “Enquiry” button, and fill in the details. Our support team will immediately get in touch with you, understand your requirements, and provide you with a service quotation.
              </p>
              {/* arrows for slide 1 */}
              <label
                htmlFor="faq-5"
                className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-[#172A3A] text-white shadow ring-1 ring-black/10 cursor-pointer select-none"
                aria-label="Previous"
              >
                &#8592;
              </label>
              <label
                htmlFor="faq-2"
                className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-[#172A3A] text-white shadow ring-1 ring-black/10 cursor-pointer select-none"
                aria-label="Next"
              >
                &#8594;
              </label>
            </div>

            <input type="radio" name="faq-carousel" id="faq-2" className="peer/f2 hidden" />
            <div className="peer-checked/f2:block hidden relative rounded-2xl border border-slate-200 bg-[#008060] p-6 md:p-8 shadow-sm text-white max-w-md" style={{ minHeight: 260 }}>
              <h3 className="text-xl md:text-2xl font-semibold">Do you offer regular maintenance plans?</h3>
              <p className="mt-3">
                Yes, we have flexible AMC (Annual Maintenance Contracts) as well as daily, weekly, fortnightly, and monthly maintenance packages. These include services like daily housekeeping, routine cleaning, pest control, plumbing & electrical check-ups, and garden maintenance. maintained all year round.
              </p>
              {/* arrows for slide 2 */}
              <label
                htmlFor="faq-1"
                className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-[#172A3A] text-white shadow ring-1 ring-black/10 cursor-pointer select-none"
                aria-label="Previous"
              >
                &#8592;
              </label>
              <label
                htmlFor="faq-3"
                className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-[#172A3A] text-white shadow ring-1 ring-black/10 cursor-pointer select-none"
                aria-label="Next"
              >
                &#8594;
              </label>
            </div>

            <input type="radio" name="faq-carousel" id="faq-3" className="peer/f3 hidden" />
            <div className="peer-checked/f3:block hidden relative rounded-2xl border border-slate-200 bg-[#E53935] p-6 md:p-8 shadow-sm text-white max-w-md" style={{ minHeight: 260 }}>
              <h3 className="text-xl md:text-2xl font-semibold">Is your service available for both homes and offices?</h3>
              <p className="mt-3">
                We serve residential spaces like apartments, villas, and independent houses, as well as commercial spaces like offices, schools, hospitals, hotels, retail outlets, warehouses, and industrial sites, ensuring clean, hygienic, and fresh environments everywhere.
              </p>
              {/* arrows for slide 3 */}
              <label
                htmlFor="faq-2"
                className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-[#172A3A] text-white shadow ring-1 ring-black/10 cursor-pointer select-none"
                aria-label="Previous"
              >
                &#8592;
              </label>
              <label
                htmlFor="faq-4"
                className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-[#172A3A] text-white shadow ring-1 ring-black/10 cursor-pointer select-none"
                aria-label="Next"
              >
                &#8594;
              </label>
            </div>

            <input type="radio" name="faq-carousel" id="faq-4" className="peer/f4 hidden" />
            <div className="peer-checked/f4:block hidden relative rounded-2xl border border-slate-200 bg-[#2979FF] p-6 md:p-8 shadow-sm text-white max-w-md" style={{ minHeight: 260 }}>
              <h3 className="text-xl md:text-2xl font-semibold">Do you bring your own equipment and materials?</h3>
              <p className="mt-3">
                Yes, we are fully equipped. Our team carries high-quality cleaning machines, tools, eco-friendly chemicals, and disinfectants to ensure the best results. We strictly avoid harsh chemicals and prefer eco-safe and child-friendly products, making our services safe for homes with kids, pets, and elderly people.
              </p>
              {/* arrows for slide 4 */}
              <label
                htmlFor="faq-3"
                className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-[#172A3A] text-white shadow ring-1 ring-black/10 cursor-pointer select-none"
                aria-label="Previous"
              >
                &#8592;
              </label>
              <label
                htmlFor="faq-5"
                className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-[#172A3A] text-white shadow ring-1 ring-black/10 cursor-pointer select-none"
                aria-label="Next"
              >
                &#8594;
              </label>
            </div>

            <input type="radio" name="faq-carousel" id="faq-5" className="peer/f5 hidden" />
            <div className="peer-checked/f5:block hidden relative rounded-2xl border border-slate-200 bg-[#B6D94C] p-6 md:p-8 shadow-sm text-white max-w-md" style={{ minHeight: 260 }}>
              <h3 className="text-xl md:text-2xl font-semibold">What types of cleaning services do you provide?</h3>
              <p className="mt-3">
                We provide a wide range of facility management services that cover every corner of your space. From deep home cleaning, kitchen and washroom sanitization, balcony & terrace cleaning to office cleaning, pest control, plumbing, painting, electrical repairs, and disinfection services – we handle it all.
              </p>
              {/* arrows for slide 5 */}
              <label
                htmlFor="faq-4"
                className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-[#172A3A] text-white shadow ring-1 ring-black/10 cursor-pointer select-none"
                aria-label="Previous"
              >
                &#8592;
              </label>
              <label
                htmlFor="faq-1"
                className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-[#172A3A] text-white shadow ring-1 ring-black/10 cursor-pointer select-none"
                aria-label="Next"
              >
                &#8594;
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - move here, after FAQ and before Contact Us */}
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

      {/* Contact Us Section */}
      <section
        id="contact"
        className="py-16 relative"
        style={{
          background: `url(${propertyContactBg}) center/cover no-repeat`,
          minHeight: "600px",
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          {/* Heading and description in normal flow */}
          <div className="max-w-2xl mx-auto pt-2 pb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-2">Contact Us</h2>
          <p className="text-[#0B1B36] text-center text-base md:text-lg font-medium">
          We’re here to help you with all your facility management needs. Whether it’s cleaning, pest control, plumbing, or complete maintenance solutions, our support team is just a call or click away. Reach out to us today and let our trained professionals make your space hassle-free.
          </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-start md:justify-center gap-10">
            {/* Left: Touch With Us form */}
            <div className="flex-1 max-w-lg bg-gradient-to-br from-[#4B5C7B]/90 to-[#6C7A97]/90 rounded-2xl shadow-lg p-8 md:p-10 border border-white/20 backdrop-blur-md"
              style={{ minWidth: 340 }}>
              <h3 className="text-2xl font-bold text-white text-center mb-8">Touch With Us</h3>
              <form className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-white text-sm mb-1">First Name *</label>
                    <input type="text" placeholder="" className="w-full bg-transparent border-b border-white text-white px-2 py-2 focus:outline-none" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-white text-sm mb-1">Last Name *</label>
                    <input type="text" placeholder="" className="w-full bg-transparent border-b border-white text-white px-2 py-2 focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-white text-sm mb-1">Email id *</label>
                  <input type="email" placeholder="" className="w-full bg-transparent border-b border-white text-white px-2 py-2 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-white text-sm mb-1">Phone Number *</label>
                  <input type="tel" placeholder="" className="w-full bg-transparent border-b border-white text-white px-2 py-2 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-white text-sm mb-1">Select Services *</label>
                  <select className="w-full bg-transparent border-b border-white text-white px-2 py-2 focus:outline-none appearance-none">
                    <option value="" className="text-black">Select Services *</option>
                    <option value="hard" className="text-black">Hard Services</option>
                    <option value="soft" className="text-black">Soft Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white text-sm mb-1">Message *</label>
                  <textarea className="w-full bg-transparent border-b border-white text-white px-2 py-2 focus:outline-none" rows="2"></textarea>
                </div>
                <div className="flex justify-center mt-6">
                  <button type="submit" className="bg-[#B6D94C] text-[#0B1B36] font-semibold px-12 py-2.5 rounded-full shadow-md hover:bg-[#a6c93c] transition text-lg">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            {/* Right: Info card */}
            <div className="flex-1 max-w-lg bg-[#172A3A] bg-opacity-95 rounded-2xl shadow-lg p-8 md:p-10 flex flex-col justify-center border border-white/20"
              style={{ minWidth: 340 }}>
              <h2 className="text-3xl font-bold text-center text-black mb-2 md:hidden block">Contact Us</h2>
              <div className="text-center">
                <h3 className="font-bold text-2xl mb-2 text-white">Our Address</h3>
                <div className="mb-4 text-base text-white/90">
                  ACR Facility Management Services<br />123, Heritage Street, Hyderabad, India
                </div>
                <h3 className="font-bold text-2xl mb-2 text-white">Contact Information</h3>
                <div className="mb-4 text-base text-white/90">
                  Phone: +91 98765 43210<br />Email: info@acsfms.com
                </div>
                <h3 className="font-bold text-2xl mb-2 text-white">Timings</h3>
                <div className="text-base text-white/90">
                  Monday – Saturday: 10:00 AM – 11:00 PM<br />Sunday: Closed
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center bg-[#B6D94C] rounded-2xl p-8 md:p-12 gap-8 border-2 border-[#b6d94c] shadow-lg">
            {/* LEFT: Text and form */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-white text-lg font-medium mb-6 max-w-xl">
                Join our mailing list and never miss updates on cleaning tips, facility management insights, and exclusive service offers. Delivered straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="rounded-md px-4 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7AC943] w-full sm:w-auto"
                />
                <button
                  type="submit"
                  className="bg-[#172A3A] text-white font-semibold rounded-md px-8 py-3 text-base hover:bg-[#0B1B36] transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
            {/* RIGHT: Image */}
            <div className="flex-shrink-0 mt-6 md:mt-0">
              <img
                src={newsletterImg}
                alt="Newsletter"
                className="w-[180px] h-[220px] object-cover rounded-xl border-4 border-[#b6d94c] bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      <FloatingActions />

      
    </>
  );
}
