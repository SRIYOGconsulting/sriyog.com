import SoftwareDevelopment from "@/components/consulting/SoftwareDevelopment";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Software Development | SRIYOG Consulting",
  description: "Transform your software development processes with SRIYOG Consulting's expert solutions.",
  openGraph: {
    title: "Software Development | SRIYOG Consulting",
    description: "Transform your software development processes with SRIYOG Consulting's expert solutions.",
    url: "https://www.sriyog.com/consulting/software-development",
    images: [
      {
        url: "/assets/images/consulting/software-development.jpg",
        alt: "Software Development"
      }
    ]
  }
};
export default function page() {
  return (
    <>
      <SoftwareDevelopment />
    </>
  );
}
