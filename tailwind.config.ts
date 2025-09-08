import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        main: "#700C18",
      },
    },
  },
  plugins: [],
};
export default config;
