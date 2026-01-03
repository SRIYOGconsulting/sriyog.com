import WebApplicationDevelopment from "./WebApplicationDevelopment";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Application Development | SRIYOG Consulting",
  description: "Expert Web Application Development services from SRIYOG Consulting.",
  openGraph: {
    title: "Web Application Development | SRIYOG Consulting",
    description: "Expert Web Application Development services from SRIYOG Consulting.",
    url: "https://www.sriyog.com/consulting/web-application-development",
    images: [
      {
        url: "https://sriyog.com/og/default.jpg",
        alt: "Web Application Development"
      }
    ]
  }
};

export default function Page() {
  return <WebApplicationDevelopment />;
}
