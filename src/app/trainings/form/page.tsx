import Ribbon from "@/components/Ribbon";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Book a Training | Online & Onsite Courses Nepal",
  
};
export default function TrainingForm() {
  return (
    <>
      <Ribbon name="Book a Training" des="" />
      <section className="lg:w-full mx-auto mb-[45px]">
        <div>
          <iframe
            className="airtable-embed"
            src="https://airtable.com/embed/app30hmkatmLiojps/pagJPOzHv6PJF5zGW/form"
            width="100%"
            height="1300"
            style={{ background: "transparent", border: "1px solid #ccc" }}
          ></iframe>
        </div>
      </section>
    </>
  );
}
