import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const evie = localFont({
  src: [
    {
      path: "./fonts/EvieSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/EvieSans-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/EvieSans-Medium.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/EvieSans-MediumItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/EvieSans-Bold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/EvieSans-BoldItalic.woff2",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-evie-sans",
});

const evieCondensed = localFont({
  src: [
    {
      path: "./fonts/EvieSans-RegularCond.woff2",
      weight: "400",
      style: "condensed",
    },
    {
      path: "./fonts/EvieSans-MediumCond.woff2",
      weight: "600",
      style: "condensed",
    },
    {
      path: "./fonts/EvieSans-BoldCond.woff2",
      weight: "800",
      style: "condensed",
    },
  ],
  variable: "--font-evie-sans-condensed",
});

export const metadata: Metadata = {
  title: "Katy Thompson",
  description: "Digital producer, Full-stack developer. Eye-catching websites and useful web tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${evie.variable} ${evieCondensed.variable} antialiased gradient-background`}
      >
        {children}
      </body>
    </html>
  );
}
