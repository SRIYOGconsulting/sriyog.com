import ConsultingManagement from "@/components/consulting/ITConsulting";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Consulting in Nepal | SRIYOG Consulting",
};

export default function ITConsultancyManagement() {
  return (
    <>
      <ConsultingManagement />
    </>
  );
} 
