import SurveyFormDevelopment from "@/components/consulting/SurveyFormDevelopment";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Survey Form Development | SRIYOG Consulting",
  description: "Streamline your data collection with SRIYOG Consulting's survey form development services.",
  openGraph: {
    title: "Survey Form Development | SRIYOG Consulting",
    description: "Streamline your data collection with SRIYOG Consulting's survey form development services.",
    url: "https://www.sriyog.com/consulting/survey-form-development",
    images: [
      {
        url: "/assets/images/og/default.jpg",
        alt: "Survey Form Development"
      }
    ]
  }
};
export default function page() {
  return (
    <>
      <SurveyFormDevelopment />
    </>
  );
}
