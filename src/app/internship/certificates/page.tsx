import Ribbon from "@/components/Ribbon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Internship Certificates | SRIYOG Consulting",
  description: "Verify internship Certificates of SRIYOG Consulting.",
  openGraph: {
    title: "Internship Certificates | SRIYOG Consulting",
    description: "Verify internship Certificates of SRIYOG Consulting.",
    url: "https://www.sriyog.com/internship/certificates",
    images: [
      {
        url: "https://sriyog.com/og/default.jpg",
        alt: "Internship"
      }
    ]
  }
};
const Internship = () => {
  return (
    <>
      <Ribbon name="Internship Certificates" des="" />
      <section className="lg:w-full ">
        <div className="">
          <div className="lg:max-w-[1180px] mx-auto my-0 md:max-w-[1000px] sm:max-w-[720px]  lg:px-12">
            
            <div>
            <iframe
              className="airtable-embed"
              src="https://airtable.com/embed/appcRLi3R3qIFyPIU/shrp1B6DNo8qsHQ4q?viewControls=on"
              frameBorder="0"
              width="100%"
              height="6633"
              style={{
                background: "transparent",
                border: "0px solid #ccc",
              }}
            ></iframe>
          </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Internship;