import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
  title: "Quote | SRIYOG Consulting",
};

const page = () => {
  return (
    <>
      <section className="lg:w-[1180px] mx-auto mb-[45px]">
        <div>
          <iframe
            className="airtable-embed"
            src="https://airtable.com/embed/app30hmkatmLiojps/pagBFKEcQg2EOzQqu/form"
            frameBorder="0"
            width="100%"
            height="1550"
            style={{ background: "transparent" }}
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default page;
