
import Analysis from "@/components/consulting/DataAnalysis";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Analysis | SRIYOG Consulting",
  description: "Unlock the power of your data with SRIYOG Consulting's expert analysis services.",
  openGraph: {
    title: "Data Analysis | SRIYOG Consulting",
    description: "Unlock the power of your data with SRIYOG Consulting's expert analysis services.",
    url: "https://www.sriyog.com/consulting/data-analysis",
    images: [
      {
        url: "/assets/images/consulting/data-analysis.jpg",
        alt: "Data Analysis"
      }
    ]
  }
};
export default function DataAnalysis() {
  return <Analysis/>

}
