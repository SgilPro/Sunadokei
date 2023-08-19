import "./globals.css";
import type { Metadata } from "next";
import { Raleway, Merriweather_Sans } from "next/font/google";

const raleway = Raleway({
  variable: "--display-font",
  subsets: ["latin"],
});

const merriweather = Merriweather_Sans({
  variable: "--body-font",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Sunadokei",
  description: "Track your time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${merriweather.variable}`}>
        {children}
      </body>
    </html>
  );
}
