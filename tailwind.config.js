/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/**.{jsx,js}", "./*.html"],
  theme: {
    fontFamily: {
      samim: "samim",
    },
    extend: {
      container: {
        center: true,
        padding: "16px",
      },
    },
  },
  plugins: [],
};
