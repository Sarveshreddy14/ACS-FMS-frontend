// src/components/Header.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";           // ✅ use React Router for page routes
import logo from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const link = "text-sm px-3 py-2 rounded-lg hover:bg-ink-700/5";

  return (
    <header
      className={`sticky top-0 z-50 transition ${
        scrolled
          ? "bg-white/95 backdrop-blur border-b border-slate-200/70"
          : "bg-white"
      }`}
    >
      <div className="container flex items-center justify-between py-3">
        {/* Logo -> Home */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="ACS FMS" className="h-8 w-8 rounded-md" />
          <div className="leading-tight">
            <div className="font-display text-lg text-ink-900">
              ACS <span className="text-[#7AC943]">FMS</span>
            </div>
            <div className="text-[10px] text-ink-500 -mt-1">
              Facilities Management Services
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 relative">
          <Link to="/" className={link}>
            Home
          </Link>

          <Link to="/about" className={link}>
            About Us
          </Link>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={link + " flex items-center gap-1"}
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
            >
              Services <span aria-hidden>▾</span>
            </button>

            {servicesOpen && (
              <div
                role="menu"
                className="absolute left-0 mt-2 w-64 rounded-xl border border-slate-200 bg-white shadow-md p-2"
              >
                {/* Use absolute path with hash so it works from /about too */}
                <a
                  role="menuitem"
                  href="/#services"
                  className="block px-3 py-2 rounded-lg hover:bg-slate-100 text-sm"
                >
                  Facilities Management
                </a>
                <a
                  role="menuitem"
                  href="/#services"
                  className="block px-3 py-2 rounded-lg hover:bg-slate-100 text-sm"
                >
                  Pest Control
                </a>
                <a
                  role="menuitem"
                  href="/#services"
                  className="block px-3 py-2 rounded-lg hover:bg-slate-100 text-sm"
                >
                  Security Guard
                </a>
                <a
                  role="menuitem"
                  href="/#services"
                  className="block px-3 py-2 rounded-lg hover:bg-slate-100 text-sm"
                >
                  Garden & Landscape
                </a>
              </div>
            )}
          </div>

          {/* These link to sections on the Home page. Using /#... makes them work from any route */}
          <a href="/#blogs" className={link}>
            Blogs
          </a>
          <a href="/#career" className={link}>
            Career
          </a>
          <a href="/#contact" className="btn btn-primary ml-2">
            Contact Us
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden btn-ghost"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200/70">
          <div className="container py-2 flex flex-col">
            <Link to="/" onClick={() => setOpen(false)} className="px-2 py-2">
              Home
            </Link>
            <Link to="/about" onClick={() => setOpen(false)} className="px-2 py-2">
              About Us
            </Link>

            {/* Mobile services (simple list; closes menu on click) */}
            <a
              href="/#services"
              onClick={() => setOpen(false)}
              className="px-2 py-2"
            >
              Services
            </a>

            <a
              href="/#blogs"
              onClick={() => setOpen(false)}
              className="px-2 py-2"
            >
              Blogs
            </a>
            <a
              href="/#career"
              onClick={() => setOpen(false)}
              className="px-2 py-2"
            >
              Career
            </a>
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-2"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
