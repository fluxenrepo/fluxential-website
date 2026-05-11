/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#070B14",
        graphite: "#101827",
        electric: "#1E90FF",
        violet: "#8B5CF6",
        silver: "#CBD5E1",
        slate: "#94A3B8",
      },
      boxShadow: {
        glow: "0 0 40px rgba(30,144,255,0.35)",
        violetGlow: "0 0 40px rgba(139,92,246,0.35)",
      },
    },
  },
  plugins: [],
}