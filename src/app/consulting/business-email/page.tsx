import Business from "@/components/BusinessEmail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business eMail | SRIYOG Consulting",
  description: "Enhance your business communication with SRIYOG Consulting's professional email services.",
  openGraph: {
    title: "Business eMail | SRIYOG Consulting",
    description: "Enhance your business communication with SRIYOG Consulting's professional email services.",
    url: "https://www.sriyog.com/consulting/business-email",
    images: [
      {
        url: "/assets/images/consulting/business-email.jpg",
        alt: "Business eMail"
      }
    ]
  }
};
export default function BusinessEmail() {
  return <Business />;
}
