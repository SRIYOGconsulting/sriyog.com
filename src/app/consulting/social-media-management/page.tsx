import SocialMediaManagement from "./SocialMediaManagement";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Management | SRIYOG Consulting",
  description: "Expert Social Media Management services from SRIYOG Consulting.",
  openGraph: {
    title: "Social Media Management | SRIYOG Consulting",
    description: "Expert Social Media Management services from SRIYOG Consulting.",
    url: "https://www.sriyog.com/consulting/social-media-management",
    images: [
      {
        url: "https://sriyog.com/assets/images/og/default.jpg",
        alt: "Social Media Management"
      }
    ]
  }
};

export default function Page() {
  return <SocialMediaManagement />;
}
