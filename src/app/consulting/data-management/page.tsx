import DataManagement from "./DataManagement";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Management | SRIYOG Consulting",
  description: "Expert Data Management services from SRIYOG Consulting.",
  openGraph: {
    title: "Data Management | SRIYOG Consulting",
    description: "Expert Data Management services from SRIYOG Consulting.",
    url: "https://www.sriyog.com/consulting/data-management",
    images: [
      {
        url: "https://sriyog.com/assets/images/og/default.jpg",
        alt: "Data Management"
      }
    ]
  }
};

export default function Page() {
  return <DataManagement />;
}
