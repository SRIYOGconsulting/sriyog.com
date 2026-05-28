import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
  title: "Book a Meeting | SRIYOG Consulting",
  description: "Schedule a meeting with SRIYOG Consulting.",
  openGraph: {
    title: "Book a Meeting | SRIYOG Consulting",
    description: "Schedule a meeting with SRIYOG Consulting.",
    url: "https://www.sriyog.com/meeting",
    images: [
      {
        url: "https://sriyog.com/og/default.jpg",
        alt: "Book a Meeting"
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
            src="https://airtable.com/embed/appcRLi3R3qIFyPIU/pagt2XBvDarerewZl/form"
            frameBorder="0"
            width="100%"
            height="1100"
            style={{ background: "transparent" }}
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default page;