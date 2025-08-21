import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Mediflow Jobs", description: "Healthcare job board (JP/VI)" };
export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="ja">
      <head><meta name="viewport" content="width=device-width, initial-scale=1" /></head>
      <body>{children}</body>
    </html>
  );
}
