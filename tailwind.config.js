/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        // padding: {
        //   DEFAULT: "2rem",
        //   sm: "3rem",
        // },
        margin: {
          DEFAULT: "1rem",
          sm: "1rem",
        },
      },
      colors:{
       // primary: "#CF9FFe",
       primary: '#382a51',
       secondary: '#8c57ed',
      },
    },
  },
  plugins: [],
}

