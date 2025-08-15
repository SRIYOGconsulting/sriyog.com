import Partnership from "@/components/Partnership";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partnership | SRIYOG Consulting",
};
const PartnershipPage: React.FC = () => {
  return (
    <>
      <Partnership />
    </>
  );
};

export default PartnershipPage;
