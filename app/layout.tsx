import type { Metadata } from "next";
import { Space_Grotesk, Manrope, Roboto_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "林楷宜 — Frontend Engineer",
  description:
    "前端工程師，專注 React、Next.js、TypeScript。具備 Leaflet 地圖開發、SPARQL 資料串接與 Node.js 後端實務經驗，並具備 RBAC 權限系統設計、AI 輔助開發流程建置等跨層級系統思維，曾參與政府與學術研究平台開發。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={`${spaceGrotesk.variable} ${manrope.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink font-body">
        {children}
      </body>
    </html>
  );
}
