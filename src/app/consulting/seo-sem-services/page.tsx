import SEOSEM from "@/components/consulting/SEO_SEM_Servixes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO/SEM Services | SRIYOG Consulting",
  description: "Enhance your online visibility with SRIYOG Consulting's SEO/SEM services.",
  openGraph: {
    title: "SEO/SEM Services | SRIYOG Consulting",
    description: "Enhance your online visibility with SRIYOG Consulting's SEO/SEM services.",
    url: "https://www.sriyog.com/consulting/seo-sem-services",
    images: [
      {
        url: "/assets/images/consulting/seo-sem-services.jpg",
        alt: "SEO/SEM Services"
      }
    ]
  }
};
export default function SEO_SEM_Page() {
  return (
    <>
    <SEOSEM/>
    </>
  );
}
