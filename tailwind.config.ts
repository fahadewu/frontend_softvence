import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#00AB0C",
        "primary-dark": "#06540B",
        secondary: "#131313",
      },
    },
  },
  // Disable preflight to prevent conflict with existing distinct CSS
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
export default config;
