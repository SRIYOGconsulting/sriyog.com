
import Ribbon from "@/components/Ribbon";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Pitch Deck | SRIYOG Consulting",
  description: "Explore the pitch deck for SRIYOG Consulting.",
  openGraph: {
    title: "Pitch Deck | SRIYOG Consulting",
    description: "Explore the pitch deck for SRIYOG Consulting.",
    url: "https://www.sriyog.com/pitch",
    images: [
      {
        url: "/assets/images/homepage/hero-banner.jpg",
        alt: "Pitch Deck"
      }
    ]
  }
};
const Pitch = () => {

  return (
    <>
      <Ribbon name="Pitch Deck" des="" />
      <section className="lg:w-full lg:pt-[60px] md:pt-0 ">
        {/* form field of request quote */}
        <div className="bg-[#fafafa] pb-12">
          <div className="max-w-[1180px] mx-auto my-0 lg:max-w-[920px] md:max-w-[720px]  lg:px-12">
            <div>
              <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vS1WDY30vFYchVIWTSmlaT6McLiIEt8tWwGxt3zQmFMcSIR8Po2lX-C-6ifUpFa5QJG2yNv66MSFyv-/pubembed?start=false&loop=false&delayms=60000"
                width="100%"
                height="569"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pitch;
