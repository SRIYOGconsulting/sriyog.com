import CareerPage from "@/components/Career";
import Ribbon from "@/components/Ribbon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career | SRIYOG Consulting",
  openGraph:{
    title: "Career | SRIYOG Consulting",
    description: "Join our team at SRIYOG Consulting and be a part of our mission to drive digital transformation.",
    url: "https://www.sriyog.com/career",
    images: [
      {
        url: "https://sriyog.com/og/default.jpg",
        alt: "Career Opportunities"
      }
    ]
  }
};
const Career = () => {

  return (
    <>
      <Ribbon name="Career" des="" />
      <section className=" max-w-[1180px] mx-auto">
        {/* form field of request quote */}
        {/* <div className=" mx-auto my-0">
          <iframe
            className="airtable-embed  h-full w-full"
            src="https://airtable.com/embed/appcRLi3R3qIFyPIU/pagRhDtt6qX4O0LZ7/form"
            style={{
              backgroundColor: "transparent",
              height:"2230px"
            }}
          ></iframe>
        </div> */}
        <CareerPage/>
      </section>
    </>
  );
};

export default Career;
