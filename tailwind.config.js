// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        corporate: {
          primary: '#0052CC', // Royal Blue
          secondary: '#6B7280', // Slate Gray
          accent: '#00B8D9', // Cyan
          background: '#F5F7FA', // Light Gray
          text: '#1D2D50', // Dark Navy
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#007bff",
          secondary: "#6c757d",
          accent: "#6610f2",
          neutral: "#f3f4f6",
          "base-100": "#ffffff",
        },
        dark: {
          primary: "#374151",
          secondary: "#6b7280",
          accent: "#4b5563",
          neutral: "#1f2937",
          "base-100": "#1f2937",
        },
        corporate: {
          primary: "#0052CC",      // Royal Blue
          secondary: "#6B7280",    // Slate Gray
          accent: "#00B8D9",       // Cyan
          neutral: "#F5F7FA",      // Light Gray background
          "base-100": "#ffffff",   // Pure white for components needing contrast
          "base-content": "#1D2D50", // Dark Navy for text
        },
      },
    ],
  },
};
