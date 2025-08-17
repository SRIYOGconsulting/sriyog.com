import WebApplicationDevelopment from "@/components/consulting/WebApplicationDevelopment";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Application Development | SRIYOG Consulting",
};

export default function page() {
  return (
    <>
      <WebApplicationDevelopment />
    </>
  );
}
