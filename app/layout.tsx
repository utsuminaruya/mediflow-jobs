import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mediflow Jobs",
  description: "Bright, simple job board for healthcare roles in Japan (JP/VI).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
