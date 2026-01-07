import Ribbon from "@/components/Ribbon";
import Survey from "@/src/app/survey/Survey";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Survey | SRIYOG Consulting",
  description: "Participate in SRIYOG Consulting’s IT Survey to share insights on technology, innovation, and digital transformation.",
  openGraph: {
    title: "IT Survey | SRIYOG Consulting",
    description: "Take part in SRIYOG Consulting’s IT Survey and help shape insights on technology, innovation, and digital transformation.",
    url: "https://www.sriyog.com/it-survey",
    images: [
      {
        url: "https://sriyog.com/og/default.jpg",
        alt: "IT Survey by SRIYOG Consulting"
      }
    ]
  }
};


export default function Page(){
    return(<>
        <Survey/>
    </>)
}