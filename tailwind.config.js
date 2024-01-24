/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f8f8f8",
        gray: {
          100: "#1f2937",
          200: "#111827",
        },
        dimgray: "#4b5563",
        white: "#fff",
        darkslategray: "#2d3748",
        sandybrown: {
          100: "#ffb866",
          200: "#f1aa58",
          300: "#f1aa57",
        },
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "30px",
      "4xl": "34px",
      "5xl": "48px",
      inherit: "inherit",
    },
    // screens: {
    //   lg: {
    //     max: "1200px",
    //   },
    //   md: {
    //     max: "960px",
    //   },
    //   sm: {
    //     max: "420px",
    //   },
    // },
  },
  corePlugins: {
    preflight: false,
  },
};
