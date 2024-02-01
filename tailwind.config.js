/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "win-blue": "#0f61cc",
        "win-blue-grad": "#458fe9",
        "win-green": "#4ca63b",
        "win-green-grad": "#277428",
        "win-semi-white": "#efecdc",
      },
    },
  },
  plugins: [],
}
