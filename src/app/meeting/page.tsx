import Ribbon from "@/components/Ribbon";
import React from "react";

export const metadata: Metadata = {
  title: "Book an Appointment | SRIYOG Consulting",
  
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
