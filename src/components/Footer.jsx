import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#172A3A] text-white pt-10 pb-4 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-10 md:gap-0 justify-between">
        {/* Logo & Description */}
        <div className="flex-1 min-w-[220px] flex flex-col gap-4">
          <div className="flex items-center gap-3 mb-2">
            <img src={logo} alt="ACS FMS" className="h-12 w-12 rounded-md bg-white p-1" />
            <div>
              <div className="font-display text-2xl font-bold text-white">
                ACS <span className="text-[#B6D94C]">FMS</span>
              </div>
              <div className="text-xs text-[#B6D94C] font-medium -mt-1">FACILITIES MANAGEMENT SERVICES</div>
            </div>
          </div>
          <p className="text-sm text-white/80 max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[150px]">
          <div className="font-semibold text-[#B6D94C] mb-3">Quick Links</div>
          <div className="flex flex-col gap-2">
            <a href="/" className="hover:underline text-white font-semibold transition">Home</a>
            <a href="/about" className="hover:underline text-white font-semibold transition">About Us</a>
            <a href="#services" className="hover:underline text-white font-semibold transition">Services</a>
            <a href="#blogs" className="hover:underline text-white font-semibold transition">Blogs</a>
            <a href="#career" className="hover:underline text-white font-semibold transition">Careers</a>
          </div>
        </div>

        {/* Our Services */}
        <div className="flex-1 min-w-[170px]">
          <div className="font-semibold text-[#B6D94C] mb-3">Our Services</div>
          <div className="flex flex-col gap-2">
            <a href="#services" className="hover:underline text-white font-semibold transition">Cleaning Services</a>
            <a href="#services" className="hover:underline text-white font-semibold transition">Plumbing Services</a>
            <a href="#services" className="hover:underline text-white font-semibold transition">Garden & Landscaping</a>
            <a href="#services" className="hover:underline text-white font-semibold transition">Pest Control Services</a>
            <a href="#services" className="hover:underline text-white font-semibold transition">Security Services</a>
            <a href="#services" className="hover:underline text-white font-semibold transition">Electrical Services</a>
          </div>
        </div>

        {/* Our Presence */}
        <div className="flex-1 min-w-[120px]">
          <div className="font-semibold text-[#B6D94C] mb-3">Our Presence</div>
          <div className="flex flex-col gap-2 text-white/90">
            <div>Hyderabad</div>
            <div>Chennai</div>
            <div>Bangalore</div>
            <div>Delhi</div>
          </div>
        </div>

        {/* Contact Us */}
        <div className="flex-1 min-w-[150px]">
          <div className="font-semibold text-[#B6D94C] mb-3">Contact Us</div>
          <div className="text-white/90 text-sm mb-2">Ph no: +91 9098765432</div>
          <div className="text-white/90 text-sm">E-mail: info@acsfms.com</div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 mt-8 pt-4 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white/70 text-xs">&copy; 2024 ACSFMS. All rights reserved</div>
        <div className="flex gap-4 text-white text-xl">
          <a href="#" aria-label="Facebook" className="hover:text-[#B6D94C] transition"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Twitter" className="hover:text-[#B6D94C] transition"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-[#B6D94C] transition"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" aria-label="Instagram" className="hover:text-[#B6D94C] transition"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
}
