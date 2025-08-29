import UIUXDesigning from "@/components/consulting/UIUIXDesigning";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Designing | SRIYOG Consulting",
  description: "Create user-centric designs with SRIYOG Consulting's UI/UX designing services.",
  openGraph: {
    title: "UI/UX Designing | SRIYOG Consulting",
    description: "Create user-centric designs with SRIYOG Consulting's UI/UX designing services.",
    url: "https://www.sriyog.com/consulting/ui-ux-designing",
    images: [
      {
        url: "https://sriyog.com/assets/images/og/default.jpg",
        alt: "UI/UX Designing"
      }
    ]
  }
};
export default function UIUXDesigningPage() {
  return (
    <>
      <UIUXDesigning />
    </>
  );
}
