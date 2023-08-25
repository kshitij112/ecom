/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "rgba(0, 0, 0, 0.1)",
          "200": "rgba(0, 0, 0, 0.4)",
          "300": "rgba(0, 0, 0, 0.6)",
        },
        black: "#000",
        whitesmoke: {
          "100": "#f0f0f0",
          "200": "#f0eeed",
        },
        tomato: {
          "100": "#ff3333",
          "200": "rgba(255, 51, 51, 0.1)",
        },
      },
      fontFamily: {
        satoshi: "Satoshi",
        "integral-cf": "'Integral CF'",
      },
      borderRadius: {
        "7xs-4": "5.4px",
        xl: "20px",
        "43xl": "62px",
        "21xl": "40px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "14xl-5": "33.5px",
      "21xl": "40px",
      xl: "20px",
      "17xl": "36px",
      "29xl": "48px",
      "5xl": "24px",
      xs: "12px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
