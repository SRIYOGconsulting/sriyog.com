import WebApplicationDevelopment from "@/components/consulting/WebApplicationDevelopment";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Application Development | SRIYOG Consulting",
  description: "Elevate your business with SRIYOG Consulting's expert web application development services.",
  openGraph: {
    title: "Web Application Development | SRIYOG Consulting",
    description: "Elevate your business with SRIYOG Consulting's expert web application development services.",
    url: "https://www.sriyog.com/consulting/web-application-development",
    images: [
      {
        url: "https://sriyog.com/assets/images/og/default.jpg",
        alt: "Web Application Development"
      }
    ]
  }
};

export default function WebApplicationDevelopmentPage() {
  return (
    <>
      <WebApplicationDevelopment />
    </>
  );
}
