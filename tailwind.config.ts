import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        medical: {50:"#eff9ff",100:"#dff3ff",200:"#bfe7ff",300:"#99dafd",400:"#6bc7f7",500:"#39b2f0",600:"#1a95d2",700:"#0e7ab0",800:"#0d5f88",900:"#0d4e6e"},
        mint: {50:"#ecfffb",100:"#d4fff6",200:"#a9ffed",300:"#74f4de",400:"#3dd9c6",500:"#14c5b2",600:"#09a395",700:"#068278",800:"#066861",900:"#075551"}
      },
      boxShadow:{soft:"0 10px 30px rgba(0,0,0,0.07)"},
      borderRadius:{"2xl":"1rem"}
    },
  },
  plugins: [],
} satisfies Config;
