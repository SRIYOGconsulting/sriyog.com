import React from 'react'
import Feedback from './Feedback'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Feedback | SRIYOG Consulting",
  description: "Share your feedback with SRIYOG Consulting to help us improve our services and solutions.",
  openGraph: {
    title: "Feedback | SRIYOG Consulting",
    description: "We value your feedback. Let us know your thoughts to help SRIYOG Consulting serve you better.",
    url: "https://www.sriyog.com/feedback",
    images: [
      {
        url: "https://sriyog.com/og/default.jpg",
        alt: "Feedback - SRIYOG Consulting"
      }
    ]
  }
};

const page = () => {
  return (
    <div>
      <Feedback/>
    </div>
  )
}

export default page