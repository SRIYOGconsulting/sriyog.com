import Processing from "@/components/consulting/DataProcessing";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Data Processing | SRIYOG Consulting",
  description: "Streamline your data processing workflows with SRIYOG Consulting's expert services.",
  openGraph: {
    title: "Data Processing | SRIYOG Consulting",
    description: "Streamline your data processing workflows with SRIYOG Consulting's expert services.",
    url: "https://www.sriyog.com/consulting/data-processing",
    images: [
      {
        url: "/assets/images/consulting/data-processing.jpg",
        alt: "Data Processing"
      }
    ]
  }
};
export default function DataProcessing() {
  
  return <Processing/>
}
