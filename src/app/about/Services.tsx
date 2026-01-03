import Image from "next/image";
export default function Services() {
  return (
    <>
      <div className="max-w-[1180px] mx-auto my-0  lg:my-0  md:mx-auto md:my-0  py-14 sm:px-0">
        <div className="grid md:grid-cols-2 p-10 bg-[#0D5D59] rounded-lg sm:flex-row sm:justify-center md:p-12 lg:gap-0 md:gap-5 md:flex-row lg:justify-between lg:items-center">
          <div className=" flex basis-1/2 gap-6 items-center my-6 pr-8 lg:m-0 lg:p-0 md:gap-6 lg:pr-8 lg:pb-8 ">
            <div className="inline basis-[17%]">
              <Image
                src={"/about/teamw.svg"}
                width={66}
                height={66}
                alt="experienced_team"
                className="color-white"
              />
            </div>

            <div className="inline basis-[80%]">
              <h2 className="inline-block !text-white font-semibold text-[18px] pb-1">
                Experienced Team
              </h2>
              <p className="text-white">
                Deliver high-quality and reliable IT services that help
                businesses thrive in a digital-first world.
              </p>
            </div>
          </div>

          <div className=" flex basis-1/2 items-center my-6 pr-8 lg:m-0 lg:p-0 gap-6 md:gap-6 lg:pr-8 lg:pb-8 ">
            <div className="inline basis-[17%]">
              <Image
                src={"/about/buildingw.svg"}
                width={66}
                height={66}
                alt="experienced_team"
              />
            </div>

            <div className="inline basis-[80%]">
              <h2 className="inline-block !text-white font-semibold text-[18px] pb-1">
                {" "}
                Enhancing Business Performance
              </h2>
              <p className="text-white">
                Enable organizations to adapt the power of technology for
                improved decision-making and business performance.
              </p>
            </div>
          </div>

          <div className=" flex basis-1/2 items-center my-6 gap-6  pr-8 lg:m-0 lg:p-0  lg:pr-8 lg:pb-8 ">
            <div className="inline basis-[17%]">
              <Image
                src={"/about/flagw.svg"}
                width={66}
                height={66}
                alt="experienced_team"
              />
            </div>

            <div className="inline basis-[80%]">
              <h2 className="inline-block !text-white font-semibold text-[18px] pb-1">
                Multiple Opportunities
              </h2>
              <p className="text-white">
                {" "}
                Foster a culture of innovation and excellence by continuously
                upgrading our skills and adopting emerging technologies.
              </p>
            </div>
          </div>

          <div className=" flex basis-1/2 items-center my-6 pr-8 gap-6 lg:m-0 lg:p-0 lg:pr-8 lg:pb-8 ">
            <div className="inline basis-[17%]">
              <Image
                src={"/about/skillsw.svg"}
                width={66}
                height={66}
                alt="experienced_team"
              />
            </div>

            <div className="inline basis-[80%]">
              <h2 className="inline-block !text-white font-semibold text-[18px] pb-1">
                Long-Term Sustainability
              </h2>
              <p className="text-white">
                {" "}
                Provide customized and scalable solutions that cater to
                businesses across various industries, ensuring long-term
                sustainability and growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
