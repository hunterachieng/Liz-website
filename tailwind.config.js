/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: { max: "360px" },
        // => @media (max-width: 280px) { ... }
        sm: { min: "361px", max: "767px" },
        // => @media (min-width: 640px) { ... }

        md: { min: "768px", max: "1024px" },
        // => @media (min-width: 768px) { ... }

        lg: { min: "1025px" , max: "1280px"},
        // => @media (min-width: 1024px) { ... }

        xl: {min:  "1281px"},
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        orange: "#ED6100",
        icons: "#454D5F",
        footer: "#F7FAFC",
        text: "#454D5F",
        darkBlue: "#13488C",
        white:"#ffffff",
        bannerText:"#003E8E",
        grey:"#F6FAFE",
        lightGrey:"#848484",
		cardBlue:"#24599D",
		cardPink:"#C01C61",
		cardPurple:"#93448F",
		cardGreen:"#359C53",
    personaFaith:"#188AEC",
    personaKamau:"#0651A5",
    taskHeading: "#282D46",
    connect:"#F8F8F8",
    dark:"#282828",
    yellow:"#FFFF00",
    aboutBlue:"#2d7ad2",
    bgOrange :"#E76033",
    btnBg: "rgba(24, 138, 236, 0.05)"
      },
    },
  },
  plugins: [],
};
