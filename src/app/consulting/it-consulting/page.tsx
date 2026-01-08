import ITConsulting from "./ITConsulting";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Consulting | SRIYOG Consulting",
  description: "Expert IT Consulting services from SRIYOG Consulting.",
  openGraph: {
    title: "IT Consulting | SRIYOG Consulting",
    description: "Expert IT Consulting services from SRIYOG Consulting.",
    url: "https://www.sriyog.com/consulting/it-consulting",
    images: [
      {
        url: "https://sriyog.com/og/default.jpg",
        alt: "IT Consulting"
      }
    ]
  }
};

export default function Page() {
  return <ITConsulting />;
}
