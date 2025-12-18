import CertificateComponent from "@/components/Certificates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificates | SRIYOG Consulting",
  openGraph: {
    title: "Certificates | SRIYOG Consulting",
    description:
      "Explore the various certificates and recognitions earned by SRIYOG Consulting.",
    url: "https://www.sriyog.com/certificates",
    images: [
      {
        url: "https://sriyog.com/assets/images/og/default.jpg",
        alt: "Certificates",
      },
    ],
  },
};

export default function CertificatePage() {
  return <CertificateComponent />;
}