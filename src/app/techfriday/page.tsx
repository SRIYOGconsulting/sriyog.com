import TechFriday from "@/components/Techfriday";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TechFriday | SRIYOG Consulting",
  description: "Explore the latest technology trends and insights every Friday.",
  openGraph: {
    title: "TechFriday | SRIYOG Consulting",
    description: "Explore the latest technology trends and insights every Friday.",
    url: "https://www.sriyog.com/techfriday",
    images: [
      {
        url: "/https://sriyog.com/assets/images/og/default.jpg",
        alt: "TechFriday"
      }
    ]
  }
};
export default function TechFridayPage() {
  //   "/assets/images/tech friday/1.png",
  //   "/assets/images/techfriday/2.png",
  //   "/assets/images/techfriday/3.png",
  //   "/assets/images/techfriday/4.png",
  //   "/assets/images/techfriday/5.png",
  //   "/assets/images/techfriday/6.png",
  //   "/assets/images/techfriday/7.png",
  //   "/assets/images/techfriday/8.png",
  // ];

  return (
    <>
      <TechFriday />
    </>
  );
}
