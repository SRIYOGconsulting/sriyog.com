import BookMeeting from "@/components/Book-Meeting";
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
        url: "https://sriyog.com/og/default.jpg",
        alt: "Book an Appointment"
      }
    ]
  }
};

const page = () => {
  return (<>
  <Ribbon name="Book a Meeting" des=""/>
  <section className="">
      <div>
        <BookMeeting/>
      </div>
    </section>
  </>  

  );
};

export default page;
