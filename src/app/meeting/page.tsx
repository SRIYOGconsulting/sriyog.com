import Ribbon from "@/components/Ribbon";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Book an Appointment | SRIYOG Consulting",
  description: "Book an appointment with SRIYOG Consulting for personalized consultations.",
  openGraph: {
    title: "Book an Appointment | SRIYOG Consulting",
    description: "Book an appointment with SRIYOG Consulting for personalized consultations.",
    url: "https://www.sriyog.com/meeting",
    images: [
      {
        url: "/assets/images/homepage/hero-banner.jpg",
        alt: "Book an Appointment"
      }
    ]
  }
};

const page = () => {
  return (<>
  <Ribbon name="Meeting" des=""/>
  <section className="lg:w-[1180px] mx-auto mb-[45px]">
      <div>
        <iframe
          className="airtable-embed"
          src="https://airtable.com/embed/appRt9Jfof8PTQWKl/pagMMYOZpvtTOCWgz/form"
          width="100%"
          height="1385"
          style={{ background: "transparent" }}
        ></iframe>
      </div>
    </section>
  </>  

  );
};

export default page;
