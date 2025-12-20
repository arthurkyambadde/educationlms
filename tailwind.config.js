/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0fdfd",
          100: "#e1fafb",
          200: "#c3f4f7",
          300: "#95eaf1",
          400: "#5cd9e4",
          500: "#2ec3d1",
          600: "#1fa4b3",
          700: "#1d8592",
          800: "#1f6a75",
          900: "#125D63", // Eduka Primary: Deep Teal
          950: "#103e43",
          DEFAULT: "#125D63",
        },
        secondary: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#FFB606", // Eduka Secondary: Vivid Amber
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
          DEFAULT: "#FFB606",
        },
        // Keeping accent as alias to secondary if needed, or distinct if user wants
        accent: {
          DEFAULT: "#FFB606",
          ...{
            50: "#fffbeb",
            100: "#fef3c7",
            200: "#fde68a",
            300: "#fcd34d",
            400: "#FFB606",
            500: "#f59e0b",
            600: "#d97706",
            700: "#b45309",
            800: "#92400e",
            900: "#78350f",
            950: "#451a03",
          },
        },
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
        border: "#e5e7eb",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.4s ease-out",
        "slide-down": "slideDown 0.4s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
