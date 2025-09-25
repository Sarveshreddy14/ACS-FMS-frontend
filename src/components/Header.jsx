import { useEffect, useState } from "react";
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
    <header className={`sticky top-0 z-50 transition ${scrolled ? "bg-white/95 backdrop-blur border-b border-slate-200/70" : "bg-white"}`}>
      <div className="container flex items-center justify-between py-3">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="ACS FMS" className="h-8 w-8 rounded-md" />
          <div className="leading-tight">
            <div className="font-display text-lg text-ink-900">ACS <span className="text-[#7AC943]">FMS</span></div>
            <div className="text-[10px] text-ink-500 -mt-1">Facilities Management Services</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1 relative">
          <a href="/" className={link}>Home</a>
          <a href="/about" className={link}>About Us</a>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className={link + " flex items-center gap-1"}>
              Services <span>▾</span>
            </button>
            {servicesOpen && (
              <div className="absolute left-0 mt-2 w-56 rounded-xl border border-slate-200 bg-white shadow-md p-2">
                {["Facilities Management","Pest Control","Security Guard","Garden & Landscape"].map((s,i)=>(
                  <a key={i} href="#services" className="block px-3 py-2 rounded-lg hover:bg-slate-100 text-sm">{s}</a>
                ))}
              </div>
            )}
          </div>

          <a href="#blogs" className={link}>Blogs</a>
          <a href="#career" className={link}>Career</a>
          <a href="#contact" className="btn btn-primary ml-2">Contact Us</a>
        </nav>

        <button
          className="md:hidden btn-ghost"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200/70">
          <div className="container py-2 flex flex-col">
            <a href="/" onClick={() => setOpen(false)} className="px-2 py-2">Home</a>
            <a href="/about" onClick={() => setOpen(false)} className="px-2 py-2">About Us</a>
            <a href="#services" onClick={() => setOpen(false)} className="px-2 py-2">Services</a>
            <a href="#blogs" onClick={() => setOpen(false)} className="px-2 py-2">Blogs</a>
            <a href="#career" onClick={() => setOpen(false)} className="px-2 py-2">Career</a>
            <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary mt-2">Contact Us</a>
          </div>
        </div>
      )}
    </header>
  );
}