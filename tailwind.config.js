/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['"Gabarito"', "sans-serif"],
        customFont1: ['"Abril Fatface"', "serif"],
      },
      colors: {
        customRed: "#E43D12",
      },
      keyframes: {
        animatedgradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
      animation: {
        "spin-slow": "spin 13s linear infinite",
        "spin-slow1": "spin 13s linear infinite",
        gradient: "animatedgradient 6s ease infinite alternate",
      },
    },
  },
  plugins: [],
};
