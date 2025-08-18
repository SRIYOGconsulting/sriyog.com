import Partnership from "@/components/Partnership";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partnership | SRIYOG Consulting",
  description: "Explore partnership opportunities with SRIYOG Consulting.",
  openGraph: {
    title: "Partnership | SRIYOG Consulting",
    description: "Explore partnership opportunities with SRIYOG Consulting.",
    url: "https://www.sriyog.com/partnership",
    images: [
      {
        url: "/assets/images/og/default.jpg",
        alt: "Partnership"
      }
    ]
  }
};
const PartnershipPage: React.FC = () => {
  return (
    <>
      <Partnership />
    </>
  );
};

export default PartnershipPage;
