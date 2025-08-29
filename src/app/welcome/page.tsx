import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Ribbon from "@/components/Ribbon";

export const metadata: Metadata = {
  title: "Welcome | SRIYOG Consulting",
  description: "Welcome to SRIYOG Consulting, your partner in IT solutions.",
  openGraph: {
    title: "Welcome | SRIYOG Consulting",
    description: "Welcome to SRIYOG Consulting, your partner in IT solutions.",
    url: "https://www.sriyog.com/welcome",
    images: [
      {
        url: "https://sriyog.com/assets/images/og/default.jpg",
        alt: "Welcome to SRIYOG Consulting"
      }
    ]
  }
};

const Welcome = () => {
  return (
    <>
      <Ribbon name="Welcome" des="" />
      <section className="flex justify-center items-center mb-[45px]  lg:w-[1180px] max-lg:container max-lg:px-3 mx-auto px-4">
        <div className=" mt-12 md:shadow-2xl rounded-[6px]  ">
          <div className="flex justify-center items-center">
            <div className="relative w-60  mb-10 h-20 justify-center items-center">
              <Image
                src="/assets/images/welcome/logo.svg"
                fill
                alt="Pracas Upreti"
                className="object-contain"
              />
            </div>
          </div>
          <div className="px-10 max-md:px-0 max-sm:px-0">
            <div className="text-base  ">
              Established on June 14, 2018, SRIYOG Consulting Pvt. Ltd. is a
              premier Managed IT Services provider based in Kamalpokhari,
              Kathmandu, Nepal. We specialize in delivering innovative,
              reliable, and scalable IT solutions to businesses of all sizes,
              helping them achieve digital transformation, operational
              efficiency and sustainable growth.
              <br />
              <br />
              At SRIYOG Consulting, we understand that technology is the
              backbone of modern businesses. That’s why we offer a wide range of
              IT services, including data processing, software development, web
              application development, database management, digital marketing,
              business process automation, IT consultancy, and more. Our
              solutions are tailored to help organizations optimize their
              digital infrastructure, enhance productivity, and drive business
              success.
              <br />
              <br />
              Technology has been connecting everyone from one corner of the
              globe to another corner in the very fastest way. Businesses and
              almost all organisations need to have their proper digital
              presence in a very effective way and their main motive is to beat
              the competition and stay ahead.
              <br />
              <br />
              My journey into the realm of technology began over a decade ago
              when I founded my first IT startup in 2007 A.D. as PRACAS Infosys
              in Biratnagar. Recognizing the potential of technology to bridge
              gaps and catalyze progress, I always tried to embark on a mission
              to leverage digital solutions to address local challenges and
              foster economic development.
              <br /><br />
              <div className="grid grid-cols-1 sm:grid-cols-5 place-content-between gap-8 place-items-center mb-3">
                <p className="col-span-3">
                  My vision was not merely to create successful businesses but
                  to effect meaningful change in my community where I have
                  contributed in more than 500 clients in my entire career
                  spreading 15 countries in the world, developing their website,
                  optimizing search results, developing mobile applications,
                  managing social media, growing their digital presence,
                  providing them a very reliable corporate Business eMail
                  solutions and also providing dedicated Information Technology
                  Consulting Solution.
                  <br />
                  <br />
                  Having good practices of Information Technology can grow the
                  business faster, gives a great digital presence, saves
                  expensive man hours, optimize workforce, manages data, its
                  privacy and also saves reputation of any organisation for any
                  forthcoming digital disasters like data loss, hacking,
                  identity theft, ransomware attacks and other various issues
                  which we may face anytime, anywhere.
                </p>
                <div className=" h-76 relative  w-full col-span-2">
                  <Image
                    src="/assets/images/about/pracas_large.png"
                    alt="About Us"
                    fill
                    className="w-full h-auto object-contain border"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-40 h-40  mx-10 max-md:mx-0 ">
            <Image
              src="/assets/images/welcome/prakash_sig.png"
              alt="Pracas_signature"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex mx-14 max-md:mx-7 mb-[25px]">
            <div className=" text-base font-semibold">
              Prakash Upreti [ PRACAS ]
              <br />
              <span className="font-normal">Chief Technology Officer</span>
              <br />
              <Link href="https://t.me/sriyog" target="_blank">p@sriyog.com</Link>
              <div className="flex gap-2 mt-1 mb-4">
                
                <Link href="https://x.com/pracas" target="_blank">
                  <FaSquareXTwitter className="text-[20px]  text-black hover:text-black inline-block" />
                </Link>

                <Link href="https://www.linkedin.com/in/pracasupreti/" target="_blank">
                  <FaLinkedin className="text-[20px]  text-black hover:text-black inline-block" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
