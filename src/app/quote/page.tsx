import Quote from "@/components/Quote";
import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
  title: "Request a Quotation | SRIYOG Consulting",
  description: "Get a quote for SRIYOG Consulting services.",
  openGraph: {
    title: "Quote | SRIYOG Consulting",
    description: "Get a quote for SRIYOG Consulting services.",
    url: "https://www.sriyog.com/quote",
    images: [
      {
        url: "https://sriyog.com/og/quote.jpg",
        alt: "Quote"
      }
    ]
  }
};

const page = () => {
  return (
    <>
      <section>
        <Quote/>
      </section>
    </>
  );
};

export default page;
