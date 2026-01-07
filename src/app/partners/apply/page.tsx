
import { Metadata } from "next";
import Partnership from "./Partnership";

export const metadata: Metadata = {
  title: "Partnership | SRIYOG Consulting",
  description: "Explore partnership opportunities with SRIYOG Consulting.",
  openGraph: {
    title: "Partnership | SRIYOG Consulting",
    description: "Explore partnership opportunities with SRIYOG Consulting.",
    url: "https://www.sriyog.com/partnership",
    images: [
      {
        url: "https://sriyog.com/og/default.jpg",
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
