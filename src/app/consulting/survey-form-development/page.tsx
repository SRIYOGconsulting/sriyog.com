import SurveyFormDevelopment from "./SurveyFormDevelopment";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Survey Form Development | SRIYOG Consulting",
  description: "Expert Survey Form Development services from SRIYOG Consulting.",
  openGraph: {
    title: "Survey Form Development | SRIYOG Consulting",
    description: "Expert Survey Form Development services from SRIYOG Consulting.",
    url: "https://www.sriyog.com/consulting/survey-form-development",
    images: [
      {
        url: "https://sriyog.com/og/default.jpg",
        alt: "Survey Form Development"
      }
    ]
  }
};

export default function Page() {
  return <SurveyFormDevelopment />;
}
