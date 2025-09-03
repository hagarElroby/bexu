import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      ssm: "420px",
      sm: "540px",
      md: "768px",
      custom: "850px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
      hd: "1600px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        light: "#F3F3F3",
        primary: "#0084FF", // text-primary
        dark: "#1C1B1F", // text-dark
        gray: "#313131", // text-gray
        lightGray: "#667085", // text-lightGray
        main: "#700C18", // text-main
      },
    },
  },
  plugins: [],
};
export default config;
