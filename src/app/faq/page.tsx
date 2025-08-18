import FAQ from "@/components/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ's | SRIYOG Consulting",
  description: "Find answers to frequently asked questions about SRIYOG Consulting's services.",
  openGraph: {
    title: "FAQ's | SRIYOG Consulting",
    description: "Find answers to frequently asked questions about SRIYOG Consulting's services.",
    url: "https://www.sriyog.com/faq",
    images: [
      {
        url: "/assets/images/og/default.jpg",
        alt: "FAQ's"
      }
    ]
  }
};

export default function Page() {
  return (
    <>
      <FAQ />
    </>
  );
}
