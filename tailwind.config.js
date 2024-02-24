/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        snippetCode: ["Fira Code", "monospace"],
        inter: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}
