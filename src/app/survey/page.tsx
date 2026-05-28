import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
  title: "IT Survey | SRIYOG Consulting",
  description: "Participate in the free IT survey by SRIYOG Consulting.",
  openGraph: {
    title: "IT Survey | SRIYOG Consulting",
    description: "Participate in the free IT survey by SRIYOG Consulting.",
    url: "https://www.sriyog.com/survey",
    images: [
      {
        url: "https://sriyog.com/og/default.jpg",
        alt: "IT Survey"
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
            src="https://airtable.com/embed/appcRLi3R3qIFyPIU/pagQimZzvZsuehe7E/form"
            frameBorder="0"
            width="100%"
            height="2800"
            style={{ background: "transparent" }}
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default page;