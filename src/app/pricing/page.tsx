
import { Metadata } from 'next'
import Pricing from './Pricing';


export const metadata: Metadata = {
  title: "Pricing | SRIYOG Consulting",
  openGraph:{
    title: "Pricing | SRIYOG Consulting",
    description: "Learn more about SRIYOG Consulting, a leader in digital solutions for healthcare, employment, and tourism.",
    url: "https://www.sriyog.com/about",
    images: [
      {
        url: "https://sriyog.com/og/default.jpg",
        alt: "About Us"
      }
    ]
  }
};

const page = () => {
  return (
    <>
     <Pricing/>
    </>
  )
  
}

export default page