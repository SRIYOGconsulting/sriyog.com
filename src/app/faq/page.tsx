import FAQ from "@/components/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ's | SRIYOG Consulting",
};

export default function Page() {
  return (
    <>
      <FAQ />
    </>
  );
}
