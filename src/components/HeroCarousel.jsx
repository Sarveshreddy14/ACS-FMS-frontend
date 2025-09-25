import { useEffect, useRef, useState } from "react";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";

const slides = [
	{
		id: 1,
		title: "Pest Control Services",
		subtitle: "Safe, Effective, and Long-Lasting Pest Control",
		text: "Protect your space with ACS FMS’s expert pest control solutions. We use safe, eco-friendly methods to eliminate pests and prevent infestations, ensuring your environment stays clean and secure.",
		cta1: "Book Services",
		cta2: "Contact Us",
		img: slide1,
	},
	{
		id: 2,
		title: "Facilities Management Services",
		subtitle: "Smart Facilities, Seamless Services",
		text: "At ACS, we provide end-to-end facilities management solutions that ensure your spaces are safe, efficient, and stress-free. From maintenance and cleaning to security and landscaping, we bring comfort and reliability under one roof.",
		cta1: "Explore More",
		cta2: "Contact Us",
		img: slide2,
	},
	{
		id: 3,
		title: "Security Guard Services",
		subtitle: "Trusted Security, Peace of Mind",
		text: "ACS FMS provides highly trained and reliable security guards to protect your premises, people, and assets. Whether residential, commercial, or corporate, we ensure safety is never compromised.",
		cta1: "Book Security Services",
		cta2: "Contact Us",
		img: slide3,
	},
	{
		id: 4,
		title: "Garden & Landscape Services",
		subtitle: "Beautiful Green Spaces, Professionally Maintained",
		text: "From lush gardens to corporate landscapes, our team creates and maintains outdoor spaces that inspire. We focus on aesthetics, sustainability, and year-round maintenance to keep your surroundings fresh and green.",
		cta1: "Book Services",
		cta2: "Contact Us",
		img: slide4,
	},
];

export default function HeroCarousel() {
	const [i, setI] = useState(0);
	const timer = useRef(null);

	useEffect(() => {
		timer.current = setInterval(
			() => setI((v) => (v + 1) % slides.length),
			3000
		);
		return () => clearInterval(timer.current);
	}, []);

	const go = (n) => setI((n + slides.length) % slides.length);

	return (
		<section id="home" className="relative">
			<div className="container py-8 md:py-10">
				<div className="relative h-[42vh] md:h-[56vh] overflow-hidden rounded-2xl border border-slate-200/70">
					{slides.map((s, idx) => (
						<div
							key={s.id}
							className={`absolute inset-0 transition-opacity duration-700 ${
								idx === i ? "opacity-100" : "opacity-0"
							}`}
							aria-hidden={idx !== i}
						>
							<img
								src={s.img}
								alt={s.title}
								className="h-full w-full object-cover"
							/>
							<div className="absolute inset-0 bg-black/35" />
							<div className="absolute inset-0 container flex items-end md:items-center">
								<div className="max-w-2xl p-6 md:p-8 text-white">
									<h1 className="text-3xl md:text-5xl font-semibold text-white">
										{s.title}
									</h1>
									<h2 className="text-xl md:text-2xl font-medium mt-2">
										{s.subtitle}
									</h2>
									<p className="mt-3 text-white/90">{s.text}</p>
									<div className="mt-6 flex gap-3">
										<a
											href="#services"
											className="btn bg-[#7AC943] text-black hover:brightness-95"
										>
											{s.cta1}
										</a>
										<a
											href="#contact"
											className="btn btn-ghost bg-white/10 ring-1 ring-white/20 text-white"
										>
											{s.cta2}
										</a>
									</div>
								</div>
							</div>
						</div>
					))}

					{/* Controls */}
					<button
						onClick={() => go(i - 1)}
						className="absolute left-3 top-1/2 -translate-y-1/2 btn-ghost size-10 rounded-full bg-white/80"
						aria-label="Previous slide"
					>
						‹
					</button>
					<button
						onClick={() => go(i + 1)}
						className="absolute right-3 top-1/2 -translate-y-1/2 btn-ghost size-10 rounded-full bg-white/80"
						aria-label="Next slide"
					>
						›
					</button>

					{/* Dots */}
					<div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
						{slides.map((_, idx) => (
							<button
								key={idx}
								onClick={() => go(idx)}
								className={`h-2 rounded-full transition-all ${
									i === idx ? "w-6 bg-white" : "w-2 bg-white/60"
								}`}
								aria-label={`Go to slide ${idx + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
