/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "poppins" : ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semi: 600,
        bold: 700,
      },
      colors: {
        "dark-purple" : "#d1d5db",
        "light-white" : "rgba(255,255,255,0.17)",

        "white" : "#ffffff",
        "white-soft" : "#f7f7f7",
        "white-strong" : "#dfe0e2",

        "gray-soft" : "#707070",        
        "gray-strong" : "#343434",

        "blue" : "#092167",

        "blood" : "#960d0d",
        "green-light" : "#38c876",
        "green-dark" : "#08743b",
        "red-light" : "#ed1c24",
        "yellow" : "#ffb200",
        "pink-stick" : "#e1acac",
      },
    },
  },
  plugins: [],
}

