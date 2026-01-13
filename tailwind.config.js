/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1ae0cc', 
        secondary: "#708090",
        fontColor: {
          primary: "#19e6d5",
        },
        foreground: "#f6f9fc",
        grey: {
          50: "#7a8a9e",
          200:  "#272c36",
          400: "#15171d",
          600: "#21252d",
        },
        background: {
          primary: "#0d0f14",
        },
        accent: "#b44de0",
        destructive: "#eb3535",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        space: ["var(--font-space)"],
      },
    },
  },
  plugins: [],
};
