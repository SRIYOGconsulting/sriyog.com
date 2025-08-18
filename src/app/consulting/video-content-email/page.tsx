import VideoContentEmail from "@/components/consulting/VideoContentEmail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Content Marketing | SRIYOG Consulting",
  description: "Engage your audience with compelling video content marketing strategies from SRIYOG Consulting.",
  openGraph: {
    title: "Video Content Marketing | SRIYOG Consulting",
    description: "Engage your audience with compelling video content marketing strategies from SRIYOG Consulting.",
    url: "https://www.sriyog.com/consulting/video-content-marketing",
    images: [
      {
        url: "/assets/images/og/default.jpg",
        alt: "Video Content Marketing"
      }
    ]
  }
};
export default function DataAnalysis() {
  return (
    <>
      <VideoContentEmail />
    </>
  );
}
