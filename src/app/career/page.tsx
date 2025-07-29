import Ribbon from "@/components/Ribbon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career| SRIYOG Consulting",
};
const Career = () => {

  return (
    <>
      <Ribbon name="Career" des="" />
      <section className=" max-w-[1180px] mx-auto">
        {/* form field of request quote */}
        <div className=" mx-auto my-0">
          <iframe
            className="airtable-embed  h-full w-full"
            src="https://airtable.com/embed/appcRLi3R3qIFyPIU/pagRhDtt6qX4O0LZ7/form"
            style={{
              backgroundColor: "transparent",
              height:"2230px"
            }}
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Career;
