import type { Config } from "tailwind-config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // تأكدي من وجود s في components إذا كان اسم مجلدك كذا
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",  // لاحظت أن مجلدك اسمه component بدون s أحياناً
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;