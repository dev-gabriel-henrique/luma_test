import type { Metadata, Viewport } from "next";

import localFont from "next/font/local";

import "./globals.css";

const jakarta = localFont({
  src: "./fonts/PlusJakartaSans.woff2",
  variable: "--font-jakarta",
  weight: "200 800",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/Inter.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Luma - Learn skills that move you forward",
    template: "%s | Luma",
  },
  description:
    "Practical courses taught by people who do the work every day. Learn design, technology, business and more, one focused lesson at a time.",
  openGraph: {
    type: "website",
    siteName: "Luma",
    title: "Luma - Learn skills that move you forward",
    description:
      "Practical courses taught by people who do the work every day. Learn design, technology, business and more, one focused lesson at a time.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luma - Learn skills that move you forward",
    description:
      "Practical courses taught by people who do the work every day. Learn design, technology, business and more, one focused lesson at a time.",
  },
};

export const viewport: Viewport = { themeColor: "#F8F7F3" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
