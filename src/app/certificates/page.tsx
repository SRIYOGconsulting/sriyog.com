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
        url: "/assets/images/certificate/hero-banner.jpg",
        alt: "Certificates",
      },
    ],
  },
};

export default function Certificate() {
  return <>
  <CertificateComponent/>
  </>;
}
