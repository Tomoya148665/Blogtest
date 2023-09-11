/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        lavenderblush: {
          200: "#fff1f3",
        },
        "pink-50": {
          100: "#fdf2fa",
        },
        "pink-700": "#c11574",
        ghostwhite: {
          100: "#f8f9fc",
          200: "#f9f5ff",
        },
        darkslateblue: "#363f72",
        slateblue: "#6941c6",
        slategray: "#667085",
        gray: {
          100: "#1a1a1a",
          200: "rgba(0, 0, 0, 0.34)",
        },
        crimson: "#c01048",
        honeydew: "#ecfdf3",
        seagreen: "#027a48",
        aliceblue: {
          100: "#f0f9ff",
          200: "#eef4ff",
        },
        darkblue: "#3538cd",
        seashell: "#fff6ed",
        firebrick: "#c4320a",
        steelblue: "#026aa2",
        black: "#000",
      },
      fontFamily: {
        "text-lg-semibold": "Inter",
        merriweather: "Merriweather",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "5xl": "24px",
      lg: "18px",
      "3xl": "22px",
      "71xl": "90px",
      xl: "20px",
      "13xl-3": "32.3px",
      mini: "15px",
      "29xl": "48px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq1152: {
        raw: "screen and (max-width: 1152px)",
      },
      mq590: {
        raw: "screen and (max-width: 590px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
