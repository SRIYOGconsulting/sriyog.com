import ConsultingManagement from "@/components/consulting/ITConsulting";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Consulting in Nepal | SRIYOG Consulting",
  description: "Transform your IT infrastructure with SRIYOG Consulting's expert IT consulting services.",
  openGraph: {
    title: "IT Consulting in Nepal | SRIYOG Consulting",
    description: "Transform your IT infrastructure with SRIYOG Consulting's expert IT consulting services.",
    url: "https://www.sriyog.com/consulting/it-consulting",
    images: [
      {
        url: "/assets/images/consulting/it-consulting.jpg",
        alt: "IT Consulting"
      }
    ]
  }
};

export default function ITConsultancyManagement() {
  return (
    <>
      <ConsultingManagement />
    </>
  );
} 
