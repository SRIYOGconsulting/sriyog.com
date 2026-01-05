import { Metadata } from 'next';
import React from 'react'
import Contact from './Contact';

export const metadata: Metadata = {

  title: "Contact Us | SRIYOG Consulting",
  description: "Get in touch with SRIYOG Consulting for expert guidance and support.",
  openGraph: {
    title: "Contact Us | SRIYOG Consulting",
    description: "Get in touch with SRIYOG Consulting for expert guidance and support.",
    url: "https://www.sriyog.com/contact",
    images: [
      {
        url: "https://sriyog.com/og/default.jpg",
        alt: "Contact Us"
      }
    ]
  }
};

const page = () => {
  return (
    <div>
      <Contact/>
    </div>
  )
}

export default page