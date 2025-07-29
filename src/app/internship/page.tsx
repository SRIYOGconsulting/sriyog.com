import Ribbon from "@/components/Ribbon";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Internship | SRIYOG Consulting",
// };
const Internship = () => {
  return (
    <>
      <Ribbon name="Internship | SRIYOG" des="" />
      <section className="lg:w-full ">
        <div className="">
          <div className="lg:max-w-[1180px] mx-auto my-0 md:max-w-[920px] sm:max-w-[720px]  lg:px-12">
            <div>
              <iframe
                className="airtable-embed"
                src="https://airtable.com/embed/appcRLi3R3qIFyPIU/pagBvKYaiRmZLtsSn/form"
                width="100%"
                height="3125"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Internship;
