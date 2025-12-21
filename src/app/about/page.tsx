
import Services from "./Services";
import Image from "next/image";
import Link from "next/link";
import Ribbon from "@/components/Ribbon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | SRIYOG Consulting",
  openGraph:{
    title: "About Us | SRIYOG Consulting",
    description: "Learn more about SRIYOG Consulting, a leader in digital solutions for healthcare, employment, and tourism.",
    url: "https://www.sriyog.com/about",
    images: [
      {
        url: "https://sriyog.com/assets/images/og/default.jpg",
        alt: "About Us"
      }
    ]
  }
};
export default function Aboutpage() {
  const cardData = [
    {
      title: "Dedicated Team",
      image: "/assets/images/about/team.jpg",
    },
    {
      title: "7 Years of Service",
      image: "/assets/images/about/year.png",
    },
    {
      title: "Reliable Service",
      image: "/assets/images/about/service.jpg",
    },
  ];
  return (
    <>
      {/* About section*/}
      <Ribbon name="About" des="" />

      <div className="lg:max-w-[1180px] mx-auto px-4">
        <div className="  mx-auto flex flex-col items-center justify-center gap-5 my-10 rounded-xl ">
          <Image
            src="/assets/images/about/mayor.jpg"
            alt="About Us"
            width={1180}
            height={500}
            className="w-full h-auto object-cover rounded-xl"
          />
          <p className="text-md w-full">
            Established on June 14, 2018, SRIYOG Consulting Pvt. Ltd., based in 
            Kamalpokhari, Kathmandu, Nepal, is a leading provider of digital 
            solutions dedicated to driving digital transformation in the healthcare, employment, and tourism sectors. Our mission is to empower organizations in these vital industries with innovative, scalable, technology-driven services that enhance operational efficiency and support long-term growth.

            
          </p>
        </div>

        {/* cards with no images */}

        <div className="flex flex-col gap-6 md:flex-row  text-center pt-[56px] pb-6 ">
          {cardData.map((item, index) => (
            <div
              className="border border-gray-200 flex flex-col items-center "
              key={index}
            >
              <Image
                src={item.image}
                height={337}
                width={377}
                alt=""
                className="w-full h-auto object-cover"
              />

              <span className="border-t-[1px] border-gray-200 w-[100%] inline-block py-3 ">
                {item.title}
              </span>
            </div>
          ))}
        </div>

        {/*texts below cards */}

        <p className="text-md ">
          At SRIYOG Consulting, we believe that smart technology is key to addressing sector-specific challenges. Our diverse IT services include data processing, software and web application development, digital marketing, database management, business process automation, and expert IT consultancy—each tailored to the unique needs of agriculture, employment platforms, and tourism operations.
          <br />
          <br />
          By optimizing digital infrastructure, we help our clients streamline services, engage users effectively, and scale sustainably. We specialize in crafting robust, user-friendly web solutions with a focus on modern UI/UX design, full-stack development, and industry-specific platforms—whether for agritech, job-matching portals, or tourism management systems.
          <br />
          <br />
          Our offerings include e-commerce platforms, CMS, SaaS-based solutions, and Progressive Web Applications (PWAs) designed for mobile-first experiences with offline functionality.
        </p>

        {/*banner */}

        <div className="bg-[#055d59] rounded-xl mt-[56px] py-12 px-6 md:px-12 mb-[26px]">
          <div className="flex flex-col md:flex-row bg-white py-8 px-6 md:px-12 gap-8 md:gap-16 border  border-[#055d59] rounded-xl items-center ">
            {/* Text Section */}
            <div className="flex flex-col gap-6 basis-full md:basis-1/2  md:text-left justify-center ">
              <h3 className="text-2xl font-semibold text-[#055d59]">
                Book a Meeting
              </h3>
              <p className="text-gray-700">
                Our comprehensive IT services are tailored to the unique demands
                of healthcare, employment platforms, and tourism operations.
              </p>

              <div
                className="flex  gap-4  md:justify-start 
              flex-wrap "
              >
                <Link
                  href="/meeting"
                  className="border-[1.5px]  px-4 py-2 font-medium border-[#055d59] text-white shadow-md rounded-md  bg-[#055d59] transition-all duration-300 ease-in-out"
                >
                  Book a Meeting
                </Link>
                <Link
                  href="/timeline"
                  className="border-[1.5px] border-[#055d59] px-4 py-2 font-medium hover:text-white  shadow-md rounded-md  hover:bg-[#055d59] transition-all duration-300 ease-in-out text-[#055d59]"
                >
                  View Timeline
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className="basis-full md:basis-[40%] flex justify-center md:justify-end ">
              <Image
                src="/assets/images/about/aboutdemo.png"
                alt="aboutDemo"
                width={310}
                height={232}
                className="w-[100%] md:w-[80%] h-auto object-contain"
              />
            </div>
          </div>
        </div>
        <Services />

        <div className="max-w-[1180px] mx-auto mb-[45px]">
          <div className="flex flex-col-reverse gap-6  lg:flex-row ">
            <div className="basis-[60%] flex flex-col gap-[16px] p-5 lg:basis-full pl-0">
              <span className="inline-block w-[133px] border-top-4 h-1 bg-[#0D5D59] "></span>
              <h2 className="text-[32px] font-bold text-[#0D5D59]">
                Message from The CTO
              </h2>
              <p className="text-[15px]">
                Technology has been connecting everyone from one corner of the globe to another corner in the very fastest way. Businesses and almost all organisations need to have their proper digital presence/ technology adapted in a very effective way and their main motive should be to perform great in  competition and stay ahead. <br />
                <br />
                My journey into the realm of technology began over a decade ago when I founded my first IT startup in 2007 A.D. as PRACAS Infosys in Biratnagar. Recognizing the potential of technology to bridge the gap of digital division and catalyze progress, I always tried to embark on a mission to leverage digital solutions to address local challenges and foster economic development. 
                <br />
                <br />
                My vision was not merely to create successful businesses but to effect meaningful change in my community where I have contributed in more than 500 clients in my entire career spreading 15 countries in the world, developing their website, optimizing search results, developing mobile applications, managing social media, growing their digital presence, providing them a very reliable corporate business email solutions and also providing dedicated Information Technology Consulting Solution. 


                <br />
                <br />
                Having good practices of Information Technology can grow the business faster, gives a great digital presence, saves expensive man hours, optimize workforce, manages data, its privacy and also saves reputation of any organisation for any forthcoming digital disasters like data loss, hacking, identity theft, ransomware attacks and other various issues which we may face anytime, anywhere. 

              </p>

              <div className="pt-12 flex flex-col gap-1">
                <p className="font-bold">PRACAS Upreti</p>
                <ul className="flex gap-2 items-center">
            
                  <li>
                    <Link href=" https://x.com/pracas" target="_blank">
                      <Image
                        src={"/assets/icons/tweeter.svg"}
                        width={20}
                        height={20}
                        alt="Tweeter"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://linkedin.com/in/pracasupreti" target="_blank">
                      <Image
                        src={"/assets/icons/linkedin.svg"}
                        width={20}
                        height={20}
                        alt="telegram"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full lg:w-[70%] flex justify-center items-center px-4">
              <Image
                src="/assets/images/about/pracas_large.png"
                alt="about_photo"
                width={500}
                height={500}
                className="max-w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
