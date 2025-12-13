module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0F1724",     // Main dark card background
          green: "#14B8A6",    // Accent success/positive
          mint: "#E6FFF3",     // Income card bg
          peach: "#FFEFE1",    // Expense card bg
          sky: "#EAF6FF",      // Savings card bg
          panel: "#F7F7F8",    // Light dashboard background
          text: "#0B1220",     // Heading text color
        },
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        card: "0 4px 12px rgba(0,0,0,0.08)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};


