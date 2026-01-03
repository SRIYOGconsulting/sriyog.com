import BusinessEmail from "./BusinessEmail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Email | SRIYOG Consulting",
  description: "Professional business email marketing services from SRIYOG Consulting.",
  openGraph: {
    title: "Business Email | SRIYOG Consulting",
    description: "Professional business email marketing services from SRIYOG Consulting.",
    url: "https://www.sriyog.com/consulting/business-email",
    images: [
      {
        url: "https://sriyog.com/og/default.jpg",
        alt: "Business Email"
      }
    ]
  }
};

export default function Page() {
  return <BusinessEmail />;
}
