/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        snippetCode: ["Fira Code", "monospace"],
        lumosui: ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
}
