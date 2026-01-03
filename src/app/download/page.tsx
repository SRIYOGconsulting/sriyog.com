import Download from "./Download";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download | SRIYOG Consulting",
  description: "Access and download resources from SRIYOG Consulting.",
  openGraph: {
    title: "Download | SRIYOG Consulting",
    description: "Access and download resources from SRIYOG Consulting.",
    url: "https://www.sriyog.com/download",
    images: [
      {
        url: "https://sriyog.com/og/default.jpg",
        alt: "Download"
      }
    ]
  }
};

export default function DownloadPage() {
  return (
    <>
      <Download />
    </>
  );
}
