import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "panel": "rgba(15, 23, 42, 0.6)",
        "panel-border": "rgba(148, 163, 184, 0.18)",
        "accent": "#7c3aed",
        "accent-2": "#06b6d4"
      },
      boxShadow: {
        "glow": "0 0 30px rgba(124, 58, 237, 0.35)",
        "glass": "0 20px 60px rgba(15, 23, 42, 0.45)"
      },
      backdropBlur: {
        "glass": "18px"
      }
    }
  },
  plugins: []
};

export default config;
