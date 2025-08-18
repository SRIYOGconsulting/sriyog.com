import Marketing from "@/components/consulting/DigitalMarketing";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing | SRIYOG Consulting",
  description: "Elevate your online presence with SRIYOG Consulting's digital marketing services.",
  openGraph: {
    title: "Digital Marketing | SRIYOG Consulting",
    description: "Elevate your online presence with SRIYOG Consulting's digital marketing services.",
    url: "https://www.sriyog.com/consulting/digital-marketing",
    images: [
      {
        url: "/assets/images/og/default.jpg",
        alt: "Digital Marketing"
      }
    ]
  }
};
export default function page() {
  return (
    <>
      <Marketing />
    </>
  );
}
