/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f5f7f8",
          100: "#ecefea",
          200: "#cfd6d1",
          300: "#acb7c0",
          400: "#67707d",
          500: "#3a4657",
          600: "#243043",
          700: "#1d2837",
          800: "#182333",  /* deep navy extracted */
          900: "#101724"
        },
        surface: {
          50: "#ffffff",
          100:"#fcfcfb",
          200:"#f6f7f5",
          300:"#eff0ed",
          400:"#ecedea"   /* off-white extracted */
        },
        ink: {
          900: "#0b1220",
          700: "#1c2537",
          600: "#263248",
          500: "#475569"
        }
      },
      fontFamily: {
        display: ['Inter','system-ui','sans-serif'],
        body: ['Inter','system-ui','sans-serif']
      },
      container: {
        center: true,
        padding: "1rem",
        screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1400px" }
      }
    },
  },
  plugins: [],
};
