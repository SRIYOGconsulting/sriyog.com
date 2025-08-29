import ResourceManagement from "@/components/consulting/HumanResourceManagement";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Human Resource Management | SRIYOG Consulting",
  description: "Optimize your HR processes with SRIYOG Consulting's expert solutions.",
  openGraph: {
    title: "Human Resource Management | SRIYOG Consulting",
    description: "Optimize your HR processes with SRIYOG Consulting's expert solutions.",
    url: "https://www.sriyog.com/consulting/human-resource-management",
    images: [
      {
        url: "https://sriyog.com/assets/images/og/default.jpg",
        alt: "Human Resource Management"
      }
    ]
  }
};
export default function HumanResourceManagement() {

  return (
    <>
      <ResourceManagement/>
    </>
  );
}
