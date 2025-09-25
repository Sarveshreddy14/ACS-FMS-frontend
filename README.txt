ACS FMS — React + Tailwind (Scaffold)
=================================================
Created: 2025-09-24T14:33:33.407784

This is a front-end-only project that mirrors a modern banking/finance layout
with a hero carousel, Loans, Services, FAQ, and Contact sections.
Use this as the base to match your video design exactly.

How to run:
-----------
1) Install Node.js 18+
2) cd acs-fms-react
3) npm install
4) npm run dev  (open the localhost URL)

Where to put your exact content:
-------------------------------
- Colors: tailwind.config.js (brand.* and surface.* were extracted from your video palette)
- Navbar text: src/components/Header.jsx
- Hero: src/components/HeroCarousel.jsx (replace slide images in /src/assets and the titles/text)
- Loans/Services: src/components/Loans.jsx and src/components/Services.jsx
- FAQ: src/components/FAQ.jsx
- Contact: src/components/Contact.jsx

Notes:
------
- Carousel auto-plays every 3s and supports manual prev/next and dots.
- All sections are responsive, with sticky header and smooth scroll.
- To use your exact colors, replace the color hex values in tailwind.config.js.
- Replace placeholder images at /src/assets/slide1.jpg etc with real assets.
