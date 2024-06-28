import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "modal-bg-fade": "modal-bg-fade .1s linear",
        "modal-appear": "modal-appear .2s ease-out",
      },
      keyframes: {
        "modal-bg-fade": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "modal-appear": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "base",
    }),
  ],
};
export default config;
