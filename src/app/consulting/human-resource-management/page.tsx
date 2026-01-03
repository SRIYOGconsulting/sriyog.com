import HumanResourceManagement from "./HumanResourceManagement";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Human Resource Management | SRIYOG Consulting",
  description: "Expert Human Resource Management services from SRIYOG Consulting.",
  openGraph: {
    title: "Human Resource Management | SRIYOG Consulting",
    description: "Expert Human Resource Management services from SRIYOG Consulting.",
    url: "https://www.sriyog.com/consulting/human-resource-management",
    images: [
      {
        url: "https://sriyog.com/og/default.jpg",
        alt: "Human Resource Management"
      }
    ]
  }
};

export default function Page() {
  return <HumanResourceManagement />;
}
