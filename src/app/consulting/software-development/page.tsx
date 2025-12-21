import SoftwareDevelopment from "./SoftwareDevelopment";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development | SRIYOG Consulting",
  description: "Expert Software Development services from SRIYOG Consulting.",
  openGraph: {
    title: "Software Development | SRIYOG Consulting",
    description: "Expert Software Development services from SRIYOG Consulting.",
    url: "https://www.sriyog.com/consulting/software-development",
    images: [
      {
        url: "https://sriyog.com/assets/images/og/default.jpg",
        alt: "Software Development"
      }
    ]
  }
};

export default function Page() {
  return <SoftwareDevelopment />;
}
