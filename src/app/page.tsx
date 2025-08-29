
import HomepageComponent from "@/components/Homepage";
import { Metadata } from "next";


export const metadata:Metadata = {
  title: "Home | SRIYOG Consulting",
  description: "Welcome to SRIYOG Consulting, your partner in IT solutions.",
  openGraph: {
    title: "Home | SRIYOG Consulting",
    description: "Welcome to SRIYOG Consulting, your partner in IT solutions.",
    url: "https://www.sriyog.com",
    images: [
      {
        url: "https://sriyog.com/assets/images/og/default.jpg",
        alt: "Home"
      }
    ]
  }
};

export default function Home() {
  return (
   <>
   <HomepageComponent/>
   </>
  );
}
