import DataAnalysis from "./DataAnalysis";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Analysis | SRIYOG Consulting",
  description: "Expert Data Analysis services from SRIYOG Consulting.",
  openGraph: {
    title: "Data Analysis | SRIYOG Consulting",
    description: "Expert Data Analysis services from SRIYOG Consulting.",
    url: "https://www.sriyog.com/consulting/data-analysis",
    images: [
      {
        url: "https://sriyog.com/og/default.jpg",
        alt: "Data Analysis"
      }
    ]
  }
};

export default function Page() {
  return <DataAnalysis />;
}
