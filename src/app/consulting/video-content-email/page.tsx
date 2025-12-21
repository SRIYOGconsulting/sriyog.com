import VideoContentEmail from "./VideoContentEmail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Content Email | SRIYOG Consulting",
  description: "Expert Video Content Email services from SRIYOG Consulting.",
  openGraph: {
    title: "Video Content Email | SRIYOG Consulting",
    description: "Expert Video Content Email services from SRIYOG Consulting.",
    url: "https://www.sriyog.com/consulting/video-content-email",
    images: [
      {
        url: "https://sriyog.com/assets/images/og/default.jpg",
        alt: "Video Content Email"
      }
    ]
  }
};

export default function Page() {
  return <VideoContentEmail />;
}
