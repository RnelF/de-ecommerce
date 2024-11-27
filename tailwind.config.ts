import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#333333",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      borderWidth: {
        10: "10px",
        12: "12px",
        16: "16px",
      },
      height: {
        500: "500px",
        700: "700px",
        900: "900px",
        925: "925px",
        1200: "1200px",
        1500: "1500px",
      },
    },
  },
  plugins: [],
} satisfies Config;
