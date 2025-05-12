{import('tailwindcss').Config} 

export default {
  content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'info-bg' : "url('@asseets/download.png')",
      },
      screens: {
        lg : "1280",
        md : "1024"
      }
    },
  },
  plugins: [],
};
