import Ribbon from "@/components/Ribbon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Survey | SRIYOG Consulting",
};
export default function Page(){
    return(<>
    <Ribbon name="Survey" des=""/>
     <section className="pt-[90px] lg:w-full lg:pt-[60px] md:pt-[52px]">

        {/* form field of request quote */}
        <div className=" py-12">
          <div className="max-w-[1180px] mx-auto my-0 lg:max-w-[920px] md:max-w-[720px]  lg:px-12">
            <div>
              <iframe
                className="airtable-embed"
                src="https://airtable.com/embed/appn20cmYwi6JlwOi/shrVAOXgrjT2Nk37L"
                width="100%"
                height={9150}
                // style="background: transparent; border: 1px solid #ccc;"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>)
}