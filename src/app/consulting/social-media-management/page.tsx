import SocialMediaManagement from "@/components/consulting/SocialMediaManagement";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Management | SRIYOG Consulting",
  description: "Elevate your brand's presence with SRIYOG Consulting's social media management services.",
  openGraph: {
    title: "Social Media Management | SRIYOG Consulting",
    description: "Elevate your brand's presence with SRIYOG Consulting's social media management services.",
    url: "https://www.sriyog.com/consulting/social-media-management",
    images: [
      {
        url: "https://sriyog.com/assets/images/og/default.jpg",
        alt: "Social Media Management"
      }
    ]
  }
};
export default function page() {
  return (
    <>
      <SocialMediaManagement />
    </>
  );
}
