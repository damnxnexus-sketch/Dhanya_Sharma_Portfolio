import type { Metadata } from "next";
import { Noto_Serif, Inter } from 'next/font/google';
import "./globals.css";

const notoSerif = Noto_Serif({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'], 
  variable: '--font-noto-serif',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'], 
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Dhanya Sharma - Portfolio",
  description: "Bridging Clinical Precision with Global Leadership",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${notoSerif.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}