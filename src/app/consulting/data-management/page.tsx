import Management from "@/components/consulting/DataManagement";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Database Management | SRIYOG Consulting",
  description: "Optimize your data management processes with SRIYOG Consulting's expert solutions.",
  openGraph: {
    title: "Database Management | SRIYOG Consulting",
    description: "Optimize your data management processes with SRIYOG Consulting's expert solutions.",
    url: "https://www.sriyog.com/consulting/data-management",
    images: [
      {
        url: "/assets/images/consulting/data-management.jpg",
        alt: "Database Management"
      }
    ]
  }
};

export default function DataManagement() {
  return <Management />;
}
