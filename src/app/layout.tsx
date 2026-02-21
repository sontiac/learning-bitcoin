import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Learning Bitcoin — The Vault",
  description:
    "An art-first educational experience exploring Bitcoin. Enter the vault and discover how digital money works.",
  openGraph: {
    title: "Learning Bitcoin — The Vault",
    description:
      "An art-first educational experience exploring Bitcoin.",
    type: "website",
    images: [
      {
        url: "/bitcoin-vault-2.png",
        width: 1200,
        height: 630,
        alt: "The Bitcoin Vault — a dark corridor with golden pillars and a glowing Bitcoin coin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learning Bitcoin — The Vault",
    description:
      "An art-first educational experience exploring Bitcoin.",
    images: ["/bitcoin-vault-2.png"],
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
        className={`${geist.variable} ${playfair.variable} font-sans antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
