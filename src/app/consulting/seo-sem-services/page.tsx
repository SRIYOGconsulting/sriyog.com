import SEO_SEM_Servixes from "./SEO_SEM_Servixes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seo Sem Services | SRIYOG Consulting",
  description: "Expert seo sem services services from SRIYOG Consulting.",
  openGraph: {
    title: "Seo Sem Services | SRIYOG Consulting",
    description: "Expert seo sem services services from SRIYOG Consulting.",
    url: "https://www.sriyog.com/consulting/seo-sem-services",
    images: [
      {
        url: "https://sriyog.com/assets/images/og/default.jpg",
        alt: "Seo Sem Services"
      }
    ]
  }
};

export default function Page() {
  return <SEO_SEM_Servixes />;
}
