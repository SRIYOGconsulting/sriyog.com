import UIUIXDesigning from "./UIUIXDesigning";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ui Ux Designing | SRIYOG Consulting",
  description: "Expert ui ux designing services from SRIYOG Consulting.",
  openGraph: {
    title: "Ui Ux Designing | SRIYOG Consulting",
    description: "Expert ui ux designing services from SRIYOG Consulting.",
    url: "https://www.sriyog.com/consulting/uiux-designing",
    images: [
      {
        url: "https://sriyog.com/og/default.jpg",
        alt: "Ui Ux Designing"
      }
    ]
  }
};

export default function Page() {
  return <UIUIXDesigning />;
}
