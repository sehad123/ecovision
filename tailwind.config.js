// tailwind.config.js
module.exports = {
  darkMode: "class", // <--- WAJIB: pakai 'class' bukan 'media'
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
