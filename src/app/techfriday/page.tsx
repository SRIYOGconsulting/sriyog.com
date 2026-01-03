import TechFriday from "./TechFriday";
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
        url: "https://sriyog.com/og/default.jpg",
        alt: "TechFriday"
      }
    ]
  }
};
export default function TechFridayPage() {
  //   "/tech friday/1.png",
  //   "/techfriday/2.png",
  //   "/techfriday/3.png",
  //   "/techfriday/4.png",
  //   "/techfriday/5.png",
  //   "/techfriday/6.png",
  //   "/techfriday/7.png",
  //   "/techfriday/8.png",
  // ];

  return (
    <>
      <TechFriday />
    </>
  );
}
