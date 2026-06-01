/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 24px 80px rgba(15, 23, 42, 0.14)",
        glow: "0 18px 60px rgba(56, 189, 248, 0.22)",
      },
      backgroundImage: {
        "mesh-light":
          "radial-gradient(circle at 16% 18%, rgba(56,189,248,.24), transparent 28%), radial-gradient(circle at 84% 8%, rgba(99,102,241,.18), transparent 30%), radial-gradient(circle at 60% 86%, rgba(16,185,129,.18), transparent 28%)",
        "mesh-dark":
          "radial-gradient(circle at 16% 18%, rgba(14,165,233,.18), transparent 28%), radial-gradient(circle at 84% 8%, rgba(129,140,248,.16), transparent 30%), radial-gradient(circle at 60% 86%, rgba(45,212,191,.12), transparent 28%)",
      },
    },
  },
  plugins: [],
};
