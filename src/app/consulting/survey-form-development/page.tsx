import SurveyFormDevelopment from "@/components/consulting/SurveyFormDevelopment";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Survey Form Development | SRIYOG Consulting",
};
export default function page() {
  return (
    <>
      <SurveyFormDevelopment />
    </>
  );
}
