/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        lilla: "#9b6496",
        gron: "#7DAB81",
      },
      fontSize: {
        header: "5.2rem",
      },
      fontFamily: {
        oswald: ["oswald", "sans-serif"],
        mont: ["mont", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
