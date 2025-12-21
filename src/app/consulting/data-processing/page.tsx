import DataProcessing from "./DataProcessing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Processing | SRIYOG Consulting",
  description: "Expert Data Processing services from SRIYOG Consulting.",
  openGraph: {
    title: "Data Processing | SRIYOG Consulting",
    description: "Expert Data Processing services from SRIYOG Consulting.",
    url: "https://www.sriyog.com/consulting/data-processing",
    images: [
      {
        url: "https://sriyog.com/assets/images/og/default.jpg",
        alt: "Data Processing"
      }
    ]
  }
};

export default function Page() {
  return <DataProcessing />;
}
