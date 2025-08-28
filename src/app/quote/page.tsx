import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
  title: "Quote | SRIYOG Consulting",
  description: "Get a quote for SRIYOG Consulting services.",
  openGraph: {
    title: "Quote | SRIYOG Consulting",
    description: "Get a quote for SRIYOG Consulting services.",
    url: "https://www.sriyog.com/quote",
    images: [
      {
        url: "/https://sriyog.com/assets/images/og/default.jpg",
        alt: "Quote"
      }
    ]
  }
};

const page = () => {
  return (
    <>
      <section className="lg:w-[1180px] mx-auto mb-[45px]">
        <div>
          <iframe
            className="airtable-embed"
            src="https://airtable.com/embed/app30hmkatmLiojps/pagBFKEcQg2EOzQqu/form"
            frameBorder="0"
            width="100%"
            height="1550"
            style={{ background: "transparent" }}
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default page;
