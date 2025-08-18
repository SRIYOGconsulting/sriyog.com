import Refer from "@/components/Refer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refer a Client | SRIYOG Consulting",
  description: "Refer a client to SRIYOG Consulting.",
  openGraph: {
    title: "Refer a Client | SRIYOG Consulting",
    description: "Refer a client to SRIYOG Consulting.",
    url: "https://www.sriyog.com/refer",
    images: [
      {
        url: "/assets/images/homepage/hero-banner.jpg",
        alt: "Refer a Client"
      }
    ]
  }
};
export default function ReferPage() {
  return (
    <>
      <Refer/>
    </>
  );
}
