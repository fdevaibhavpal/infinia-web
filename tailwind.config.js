/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{astro,html,js,jsx,ts,tsx,mdx}", // IMPORTANT for Astro projects
    ],
    theme: {
      extend: {
        backgroundImage: {
          'gradient-02': 'linear-gradient(81deg, #AC1590 -0.96%, #0F9ED5 58.43%, #F6D063 110.54%)',
        },
      },
    },
    plugins: [ require('tailwindcss-animate')],
  };
  