import CareerPage from "@/components/Career";
import { Metadata } from "next";



export const metadata:Metadata={
  title: "Career | SRIYOG Consulting"
}

export default function CareerNext() {
  return(
    <div>
      <CareerPage/>
    </div>
  )
}