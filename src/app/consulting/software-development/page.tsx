import SoftwareDevelopment from "@/components/consulting/SoftwareDevelopment";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Software Development | SRIYOG Consulting",
};
export default function page() {
  return (
    <>
      <SoftwareDevelopment />
    </>
  );
}
