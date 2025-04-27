
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Christopher I.T Solution",
  description: "Web design and development agency",
  icons: {
    icon: '/favicon.ico',          // Main favicon
    // apple: '/apple-touch-icon.png', // Apple touch icon
    // shortcut: '/favicon-32x32.png', // 32x32 favicon for shortcuts
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
