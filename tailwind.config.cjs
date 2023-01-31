/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          ...require("daisyui/src/colors/themes")["[data-theme=corporate]"],
          "base-100": "#fbfbfb",
          primary: "#d3182d",
          "-btn-text-color": "white",
        },
      },
    ],
  },
};
