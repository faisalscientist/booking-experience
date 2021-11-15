module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      mulish: ["Mulish", "sans-serif"],
      fahkwang: ["Fahkwang", "sans-serif"],
    },
    extend: {
      screens: {
        "md": [
          // Sidebar appears at 768px, so revert to `sm:` styles between 768px
          // and 868px, after which the main content area is wide enough again to
          // apply the `md:` styles.
          { "min": "668px", "max": "767px" },
          { "min": "868px" },
        ],
      },
      backgroundColor: {
        "gray-250": "#EFEDED",
      },
      height: {
        100: "35rem",
      },
      minWidth: {
        16: "16rem",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  variants: {
    animation: ["motion-safe"],
    extend: {},
  },
  plugins: [],
}
