import ITConsulting from "./ITConsulting";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "I T Consulting | SRIYOG Consulting",
  description: "Expert I T Consulting services from SRIYOG Consulting.",
  openGraph: {
    title: "I T Consulting | SRIYOG Consulting",
    description: "Expert I T Consulting services from SRIYOG Consulting.",
    url: "https://www.sriyog.com/consulting/it-consulting",
    images: [
      {
        url: "https://sriyog.com/assets/images/og/default.jpg",
        alt: "I T Consulting"
      }
    ]
  }
};

export default function Page() {
  return <ITConsulting />;
}
