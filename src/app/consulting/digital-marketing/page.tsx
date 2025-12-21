import DigitalMarketing from "./DigitalMarketing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing | SRIYOG Consulting",
  description: "Expert Digital Marketing services from SRIYOG Consulting.",
  openGraph: {
    title: "Digital Marketing | SRIYOG Consulting",
    description: "Expert Digital Marketing services from SRIYOG Consulting.",
    url: "https://www.sriyog.com/consulting/digital-marketing",
    images: [
      {
        url: "https://sriyog.com/assets/images/og/default.jpg",
        alt: "Digital Marketing"
      }
    ]
  }
};

export default function Page() {
  return <DigitalMarketing />;
}
