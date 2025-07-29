import type { Metadata } from "next";
import {  Bellota_Text} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import FloatingIcons from "@/components/FloatingIcons";
import Script from "next/script";
import FooterWrapper from "@/components/FooterWrapper";
import { Toaster } from "react-hot-toast";

const bellota_text = Bellota_Text({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300","400", "700"],
});

export const metadata: Metadata = {
  title: "SRIYOG Consulting | IT Consulting Company in Nepal",
  description:
    "SRIYOG Consulting Pvt. Ltd. is a premier Managed IT Services provider based in Kamalpokhari, Kathmandu, Nepal.",
  keywords:
    "IT consulting, software development, cloud solutions, Nepal IT company",
  authors: [{ name: "SRIYOG Consulting" }],
  icons: "/assets/images/title/logo.svg",
  robots: "index, follow",
  openGraph: {
    title: "SRIYOG Consulting | IT Consulting Company in Nepal",
    description:
      "SRIYOG Consulting Pvt. Ltd. is a premier Managed IT Services provider based in Kamalpokhari, Kathmandu, Nepal.",
    url: "https://www.sriyog.com",
    siteName: "SRIYOG Consulting",
    images: [
      {
        url: "https://www.sriyog.com/assets/images/og/home.jpg",
        width: 1200,
        height: 630,
        alt: "SRIYOG Consulting OG Image",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SRIYOG Consulting | IT Consulting Company in Nepal",
    description:
      "Discover digital innovation with SRIYOG Consulting – your trusted IT partner in Nepal.",
    images: ["https://www.sriyog.com/assets/images/home.jpg"],
    creator: "@sriyog",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XC9XCSHYEE`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XC9XCSHYEE');
            `,
          }}
        />
      </head>
      <body className={`${bellota_text.variable} antialiased`}>
        <Header />
        <Toaster position="top-center" />

        <Navbar />
        {children}
        <FloatingIcons />
        <FooterWrapper />
      </body>
    </html>
  );
}
