/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // daisyui: {
  //   themes: [
  //     {
  //       customizedtheme: {
  //         primary: '#1E2772',

  //       }
  //     }
  //   ]
  // },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}