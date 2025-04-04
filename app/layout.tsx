import type { Metadata } from "next";
import { Merriweather, Merriweather_Sans } from "next/font/google";
import "./globals.css";

const merriweatherSans = Merriweather_Sans({
  // variable: "--font-merriweather-sans",

  subsets: ["latin"],
});

const merriweatherMono = Merriweather({
  // variable: "--font-merriweather-mono",
  weight: ["300", "400", "700", "900"],
  subsets: ["vietnamese"],
});

export const metadata: Metadata = {
  title: "Drink House",
  description: "Best Wine and Beer Store since 1899",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${merriweatherMono.className} ${merriweatherSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
