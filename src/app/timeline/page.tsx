import Ribbon from "@/components/Ribbon";
import { Metadata } from "next";
import React from "react";
import {
  FaBolt,
  FaCheck,
  FaChevronLeft,
  FaCreditCard,
  FaDownload,
  FaHandshake,
  FaHome,
} from "react-icons/fa";
import { FaFlask, FaLocationDot, FaRocket, FaTruckMoving } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Timeline | SRIYOG Consulting",
  description: "Explore the timeline of SRIYOG Consulting.",
  openGraph: {
    title: "Timeline | SRIYOG Consulting",
    description: "Explore the timeline of SRIYOG Consulting.",
    url: "https://www.sriyog.com/timeline",
    images: [
      {
        url: "https://sriyog.com/assets/images/og/default.jpg",
        alt: "Timeline"
      }
    ]
  }
};
const Timeline = () => {
  const name = "Timeline";

  return (
    <>
      <Ribbon name={name} des={""} />
      <section className=" w-full  relative">
        <div className="max-w-[1180px] px-[15px] max-md:px-0 mx-auto  max-lg:container max-lg:px-3">
          <div className=" mx-auto relative px-[10px] container ">
            <div className="absolute left-[50%] top-0 h-full w-1 bg-[#055D59] transform -translate-x-1/2 z-0  max-md:translate-x-0 max-lg:left-[11%] max-lg:translate-x-0"></div>
            <div className="mb-[50px] relative min-h-[100px]  ">
              <div className=" max-md:left-[10%] max-lg:left-[10%]  bg-[#055D59] w-[50px] h-[50px] text-[23px] text-white text-center absolute top-0 left-[50%] -translate-x-1/2 overflow-hidden rounded-full flex items-center justify-center">
                <FaLocationDot />
              </div>
              <div className="w-[45%] bg-[#efefef]  pb-[20px] mr-auto rounded relative mt-10 max-md:ml-auto max-md:mr-0 max-md:w-[80%] max-lg:ml-auto max-lg:mr-0 max-lg:w-[80%]">
                <div className="relative inline-block bg-[#055D59] w-full text-[#fff] font-medium text-[20px] py-[15px] rounded-t p-2 whitespace-nowrap  max-md:text-[16px] ">
                  <div className="max-md:translate-x-0 absolute right-[-10px] top-[50%] -translate-y-1/2 w-0 h-0 border-t-[10px]  mb-[20px] border-t-transparent border-b-[10px] border-b-transparent border-l-[10px] border-l-[#055D59] max-md:left-[-10px] max-md:right-auto max-md:border-l-0 max-md:border-r-[10px] max-md:border-r-[#055D59] max-lg:left-[-10px] max-lg:right-auto max-lg:border-l-0 max-lg:border-r-[10px] max-lg:border-r-[#055D59]"></div>
                  Location updated on OCR
                </div>
                <p className="mt-[20px] block my-4 ml-0 p-2">
                  15<sup>th</sup> May, 2025
                </p>
                <p className="block my-4 ml-0 mb-[1rem] p-2">
                  SRIYOG Consulting Pvt. Ltd. has updated its location from Biratnagar to Kathmandu in the Office of Company Registrar (OCR) on 15<sup>th</sup> May, 2025.
                </p>
              </div>
            </div>
            <div className="mb-[50px] relative min-h-[100px]">
              <div className="max-md:left-[10%] max-lg:left-[10%]  bg-[#055D59] w-[50px] h-[50px] text-[23px] text-white text-center absolute top-0 left-[50%] -translate-x-1/2 overflow-hidden rounded-full flex items-center justify-center">
                <FaHome />
              </div>
              <div className="w-[45%] bg-[#efefef]  pb-[20px] ml-auto rounded relative mt-10 max-md:ml-auto max-md:mr-0  max-md:w-[80%]  max-lg:ml-auto max-lg:mr-0 max-lg:w-[80%]">
                <div className="relative inline-block bg-[#055D59] w-full text-[#fff] font-medium text-[20px] py-[15px] rounded-t p-2 whitespace-nowrap  max-md:text-[16px]">
                  <div className="absolute left-[-10px] top-[50%] -translate-y-1/2 w-0 h-0 border-t-[10px]  mb-[20px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-[#055D59] max-md:left-[-10px] max-md:right-auto max-md:border-l-0 max-md:border-r-[10px] max-md:border-r-[#055D59] max-lg:left-[-10px] max-lg:right-auto max-lg:border-l-0 max-lg:border-r-[10px] max-lg:border-r-[#055D59]"></div>
                  SRIYOG App has a new homepage
                </div>
                <p className="block my-4 ml-0 mb-[1rem] p-2">
                  12<sup>th</sup> May, 2025
                  <br />
                  <br />
                  SRIYOG iOS app was successfully deployed in iOS Store after
                  multiple failed attempts.
                </p>
                <a
                  href="https://sriyog.app"
                  className="bg-[#055D59] hover:bg-[#2e5453] text-white transition-all duration-300 ease-in-out cursor-pointer font-medium text-center inline-block ml-2 py-2 px-6 rounded-md "
                >
                  Download App
                </a>
              </div>
            </div>
            <div className="mb-[50px] relative min-h-[100px]  ">
              <div className=" max-md:left-[10%] max-lg:left-[10%]  bg-[#055D59] w-[50px] h-[50px] text-[23px] text-white text-center absolute top-0 left-[50%] -translate-x-1/2 overflow-hidden rounded-full flex items-center justify-center">
                <FaTruckMoving />
              </div>
              <div className="w-[45%] bg-[#efefef]  pb-[20px] mr-auto rounded relative mt-10 max-md:ml-auto max-md:mr-0 max-md:w-[80%] max-lg:ml-auto max-lg:mr-0 max-lg:w-[80%]">
                <div className="relative inline-block bg-[#055D59] w-full text-[#fff] font-medium text-[20px] py-[15px] rounded-t p-2 whitespace-nowrap  max-md:text-[16px] ">
                  <div className="max-md:translate-x-0 absolute right-[-10px] top-[50%] -translate-y-1/2 w-0 h-0 border-t-[10px]  mb-[20px] border-t-transparent border-b-[10px] border-b-transparent border-l-[10px] border-l-[#055D59] max-md:left-[-10px] max-md:right-auto max-md:border-l-0 max-md:border-r-[10px] max-md:border-r-[#055D59] max-lg:left-[-10px] max-lg:right-auto max-lg:border-l-0 max-lg:border-r-[10px] max-lg:border-r-[#055D59]"></div>
                  Office shifted to Kathmandu
                </div>
                <p className="mt-[20px] block my-4 ml-0 p-2">
                  3<sup>rd</sup> March, 2025
                </p>
                <p className="block my-4 ml-0 mb-[1rem] p-2">
                  September and October was bleeding phase as our team worked
                  day and night to make new app on React Native Platform.
                </p>
                <a
                  href="https://sriyog.com/location/"
                  className="bg-[#055D59] hover:bg-[#2e5453] text-white transition-all duration-300 ease-in-out cursor-pointer font-medium text-center inline-block ml-2 py-2 px-6 rounded-md "
                >
                  location
                </a>
              </div>
            </div>
            <div className="mb-[50px] relative  min-h-[100px]  ">
              <div className="bg-[#055D59] w-[50px] h-[50px] text-[23px] text-white text-center absolute top-0 left-[50%] -translate-x-1/2 overflow-hidden rounded-full flex items-center justify-center max-md:left-[10%] max-lg:left-[10%]">
                <FaCreditCard />
              </div>
              <div className="w-[45%] bg-[#efefef]  pb-[20px] ml-auto rounded relative mt-10 max-md:ml-auto max-md:mr-0 max-md:w-[80%] max-lg:ml-auto max-lg:mr-0 max-lg:w-[80%]">
                <div className="relative inline-block bg-[#055D59] w-full text-[#fff] font-medium text-[20px] py-[15px] rounded-t  p-2 max-md:text-[16px]">
                  <div className="absolute left-[-10px] top-[50%] -translate-y-1/2 w-0 h-0 border-t-[10px]  mb-[20px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-[#055D59] "></div>
                  Deployed in Apple iOS Store
                </div>
                <p className="mt-[20px] block my-4 ml-0 p-2">
                  8<sup>th</sup> Nov, 2024
                </p>
                <p className="block my-4 ml-0 mb-[1rem] p-2 text-justify">
                  SRIYOG iOS app was successfully deployed in iOS Store after
                  multiple failed attempts.
                </p>
                <a
                  href="https://apps.apple.com/np/app/sriyog/id1493160529"
                  className="bg-[#055D59] hover:bg-[#2e5453] text-white transition-all duration-300 ease-in-out cursor-pointer font-medium text-center inline-block ml-2 py-2 px-6 rounded-md "
                >
                  Download App
                </a>
              </div>
            </div>
            <div className="mb-[50px] relative min-h-[100px]  ">
              <div className=" max-md:left-[10%] max-lg:left-[10%]  bg-[#055D59] w-[50px] h-[50px] text-[23px] text-white text-center absolute top-0 left-[50%] -translate-x-1/2 overflow-hidden rounded-full flex items-center justify-center">
                <FaChevronLeft />
              </div>
              <div className="w-[45%] bg-[#efefef]  pb-[20px] mr-auto rounded relative mt-10 max-md:ml-auto max-md:mr-0 max-md:w-[80%] max-lg:ml-auto max-lg:mr-0 max-lg:w-[80%]">
                <div className="relative inline-block bg-[#055D59] w-full text-[#fff] font-medium text-[20px] py-[15px] rounded-t p-2 whitespace-nowrap  max-md:text-[16px] ">
                  <div className="max-md:translate-x-0 absolute right-[-10px] top-[50%] -translate-y-1/2 w-0 h-0 border-t-[10px]  mb-[20px] border-t-transparent border-b-[10px] border-b-transparent border-l-[10px] border-l-[#055D59] max-md:left-[-10px] max-md:right-auto max-md:border-l-0 max-md:border-r-[10px] max-md:border-r-[#055D59] max-lg:left-[-10px] max-lg:right-auto max-lg:border-l-0 max-lg:border-r-[10px] max-lg:border-r-[#055D59]"></div>
                  React Native on Android
                </div>
                <p className="mt-[20px] block my-4 ml-0 p-2">
                  6<sup>th</sup> Nov, 2024
                </p>
                <p className="block my-4 ml-0 mb-[1rem] p-2">
                  September and October was bleeding phase as our team worked
                  day and night to make new app on React Native Platform.
                </p>
                <a
                  href="https://sriyog.com/app/"
                  className="bg-[#055D59] hover:bg-[#2e5453] text-white transition-all duration-300 ease-in-out cursor-pointer font-medium text-center inline-block ml-2 py-2 px-6 rounded-md "
                >
                  View App
                </a>
              </div>
            </div>
            <div className="mb-[50px] relative min-h-[100px]">
              <div className=" max-md:left-[10%] max-lg:left-[10%]  bg-[#055D59] w-[50px] h-[50px] text-[23px] text-white text-center absolute top-0 left-[50%] -translate-x-1/2 overflow-hidden rounded-full flex items-center justify-center">
                <FaCreditCard />
              </div>
              <div className="w-[45%] bg-[#efefef]  pb-[20px] ml-auto rounded relative mt-10 max-md:ml-auto max-md:mr-0  max-md:w-[80%]  max-lg:ml-auto max-lg:mr-0 max-lg:w-[80%]">
                <div className="relative inline-block bg-[#055D59] w-full text-[#fff] font-medium text-[20px] py-[15px] rounded-t p-2 whitespace-nowrap  max-md:text-[16px]">
                  <div className="absolute left-[-10px] top-[50%] -translate-y-1/2 w-0 h-0 border-t-[10px]  mb-[20px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-[#055D59] max-md:left-[-10px] max-md:right-auto max-md:border-l-0 max-md:border-r-[10px] max-md:border-r-[#055D59] max-lg:left-[-10px] max-lg:right-auto max-lg:border-l-0 max-lg:border-r-[10px] max-lg:border-r-[#055D59]"></div>
                  Payment Integration in IME PAY
                </div>
                <p className="mt-[20px] block my-4 ml-0 p-2">
                  16<sup>th</sup> May, 2024
                </p>
                <p className="block my-4 ml-0 mb-[1rem] p-2">
                  Membership fee of SRIYOG has been implemented in IME Pay App
                  successfully.
                </p>
              </div>
            </div>
            <div className="mb-[50px] relative min-h-[100px]">
              <div className=" max-md:left-[10%] max-lg:left-[10%]  bg-[#055D59] w-[50px] h-[50px] text-[23px] text-white text-center absolute top-0 left-[50%] -translate-x-1/2 overflow-hidden rounded-full flex items-center justify-center">
                <FaCheck />
              </div>
              <div className="w-[45%] bg-[#efefef]  pb-[20px] mr-auto rounded relative mt-10 max-md:ml-auto max-md:mr-0  max-md:w-[80%]  max-lg:ml-auto max-lg:mr-0 max-lg:w-[80%]">
                <div className="relative inline-block bg-[#055D59] w-full text-[#fff] font-medium text-[20px] py-[15px] rounded-t p-2  whitespace-nowrap  max-md:text-[16px]">
                  <div className="absolute right-[-10px] top-[50%] -translate-y-1/2 w-0 h-0 border-t-[10px]  mb-[20px] border-t-transparent border-b-[10px] border-b-transparent border-l-[10px] border-l-[#055D59] max-md:left-[-10px] max-md:right-auto max-md:border-l-0 max-md:border-r-[10px] max-md:border-r-[#055D59] max-lg:left-[-10px] max-lg:right-auto max-lg:border-l-0 max-lg:border-r-[10px] max-lg:border-r-[#055D59]"></div>
                  Verified in Microsoft for Startups
                </div>

                {/* Content */}
                <p className="mt-[20px] block my-4 ml-0 p-2">
                  6<sup>th</sup> March, 2024
                </p>
                <p className="block my-4 ml-0 mb-[1rem] p-2">
                  SRIYOG was successfully verified in Microsoft for Startups and
                  got USD 125,000 of Microsoft for Startups credit.
                </p>
              </div>
            </div>
            <div className="mb-[50px] relative min-h-[100px]">
              <div className=" max-md:left-[10%] max-lg:left-[10%]  bg-[#055D59] w-[50px] h-[50px] text-[23px] text-white text-center absolute top-0 left-[50%] -translate-x-1/2 overflow-hidden rounded-full flex items-center justify-center">
                <FaHandshake />
              </div>
              <div className="w-[45%] bg-[#efefef]  pb-[20px] ml-auto rounded relative mt-10 max-md:ml-auto max-md:mr-0  max-md:w-[80%]  max-lg:ml-auto max-lg:mr-0 max-lg:w-[80%]">
                <div className="relative inline-block bg-[#055D59] w-full text-[#fff] font-medium text-[20px] py-[15px] rounded-t p-2 whitespace-nowrap  max-md:text-[16px]">
                  <div className="absolute left-[-10px] top-[50%] -translate-y-1/2 w-0 h-0 border-t-[10px]  mb-[20px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-[#055D59] max-md:left-[-10px] max-md:right-auto max-md:border-l-0 max-md:border-r-[10px] max-md:border-r-[#055D59] max-lg:left-[-10px] max-lg:right-auto max-lg:border-l-0 max-lg:border-r-[10px] max-lg:border-r-[#055D59]"></div>
                  MOU Between IME PAY and SRIYOG
                </div>
                <p className="mt-[20px] block my-4 ml-0 p-2">
                  8<sup>th</sup> Feburary, 2023
                </p>
                <p className="block my-4 ml-0 mb-[1rem] p-2">
                  An agreement has been signed between IME Pay and SRIYOG
                  Consulting Pvt Ltd. According to the agreement, IME Pay will
                  be the digital payment service provider of Sriyog.com. The
                  agreement was signed with the aim of facilitating the digital
                  payment process for SRIYOG
                </p>
              </div>
            </div>
            <div className="mb-[50px] relative min-h-[100px]">
              <div className="max-md:left-[10%] max-lg:left-[10%]  bg-[#055D59] w-[50px] h-[50px] text-[23px] text-white text-center absolute top-0 left-[50%] -translate-x-1/2 overflow-hidden rounded-full flex items-center justify-center">
                <FaDownload />
              </div>
              <div className="w-[45%] bg-[#efefef]  pb-[20px] mr-auto rounded relative mt-10 max-md:ml-auto max-md:mr-0  max-md:w-[80%]  max-lg:ml-auto max-lg:mr-0 max-lg:w-[80%]">
                <div className="relative inline-block bg-[#055D59] w-full text-[#fff] font-medium text-[20px] py-[15px] rounded-t p-2 whitespace-nowrap  max-md:text-[16px]">
                  <div className="absolute right-[-10px] top-[50%] -translate-y-1/2 w-0 h-0 border-t-[10px]  mb-[20px] border-t-transparent border-b-[10px] border-b-transparent border-l-[10px] border-l-[#055D59] max-md:left-[-10px] max-md:right-auto max-md:border-l-0 max-md:border-r-[10px] max-md:border-r-[#055D59] max-lg:left-[-10px] max-lg:right-auto max-lg:border-l-0 max-lg:border-r-[10px] max-lg:border-r-[#055D59]"></div>
                  100K+ Installations
                </div>
                <p className="mt-[20px] block my-4 ml-0 p-2">
                  18<sup>th</sup> December, 2024
                </p>
                <p className="block my-4 ml-0 mb-[1rem] p-2">
                  SRIYOG app was reached 100K+ Installations from Google Play
                  Store.
                </p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.pracasinfosys.sriyog.com"
                  className="bg-[#055D59] hover:bg-[#2e5453] text-white transition-all duration-300 ease-in-out cursor-pointer font-medium text-center inline-block ml-2 py-2 px-6 rounded-md "
                >
                  Browse
                </a>
              </div>
            </div>
            <div className="mb-[50px] relative min-h-[100px]">
              <div className="max-md:left-[10%] max-lg:left-[10%]   bg-[#055D59] w-[50px] h-[50px] text-[23px] text-white text-center absolute top-0 left-[50%] -translate-x-1/2 overflow-hidden rounded-full flex items-center justify-center">
                <FaDownload />
              </div>
              <div className="w-[45%] bg-[#efefef]  pb-[20px] ml-auto rounded relative mt-10 max-md:ml-auto max-md:mr-0  max-md:w-[80%]  max-lg:ml-auto max-lg:mr-0 max-lg:w-[80%]">
                <div className="relative inline-block bg-[#055D59] w-full text-[#fff] font-medium text-[20px] py-[15px] p-2 rounded-t whitespace-nowrap  max-md:text-[16px]">
                  <div className="absolute left-[-10px] top-[50%] -translate-y-1/2 w-0 h-0 border-t-[10px]  mb-[20px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-[#055D59] max-md:left-[-10px] max-md:right-auto max-md:border-l-0 max-md:border-r-[10px] max-md:border-r-[#055D59] max-lg:left-[-10px] max-lg:right-auto max-lg:border-l-0 max-lg:border-r-[10px] max-lg:border-r-[#055D59]"></div>
                  5oK+ Installations
                </div>
                <p className="mt-[20px] block my-4 ml-0 p-2">
                  23<sup>th</sup> March, 2021
                </p>
                <p className="block my-4 ml-0 mb-[1rem] p-2">
                  SRIYOG app was reached 50K+ Installations from Google Play
                  Store.
                </p>
                <a
                  href="htttps://play.google.com/store/apps/details?id=com.pracasinfosys.sriyog.com"
                  className="bg-[#055D59] hover:bg-[#2e5453] text-white transition-all duration-300 ease-in-out cursor-pointer font-medium text-center inline-block ml-2 py-2 px-6 rounded-md "
                >
                  Browse
                </a>
              </div>
            </div>
            <div className="mb-[50px] relative min-h-[100px]">
              <div className="max-md:left-[10%] max-lg:left-[10%]  bg-[#055D59] w-[50px] h-[50px] text-[23px] text-white text-center absolute top-0 left-[50%] -translate-x-1/2 overflow-hidden rounded-full flex items-center justify-center">
                <FaRocket />
              </div>
              <div className="w-[45%] bg-[#efefef]  pb-[20px] mr-auto rounded relative mt-10 max-md:ml-auto max-md:mr-0  max-md:w-[80%]  max-lg:ml-auto max-lg:mr-0 max-lg:w-[80%]">
                <div className="relative inline-block bg-[#055D59] w-full text-[#fff] font-medium text-[20px] py-[15px] p-2 rounded-t whitespace-nowrap  max-md:text-[16px]">
                  <div className="absolute right-[-10px] top-[50%] -translate-y-1/2 w-0 h-0 border-t-[10px]  mb-[20px] border-t-transparent border-b-[10px] border-b-transparent border-l-[10px] border-l-[#055D59] max-md:left-[-10px] max-md:right-auto max-md:border-l-0 max-md:border-r-[10px] max-md:border-r-[#055D59] max-lg:left-[-10px] max-lg:right-auto max-lg:border-l-0 max-lg:border-r-[10px] max-lg:border-r-[#055D59]"></div>
                  Officially Launched
                </div>
                <p className="mt-[20px] block my-4 ml-0 p-2">
                  12<sup>th</sup> September, 2019
                </p>
                <p className="block my-4 ml-0 mb-[1rem] p-2">
                  SRIYOG Consulting Pvt. to facilitate people&apos;s daily life.
                  Ltd. has started providing such services through a website
                  called sriyog.com (www.sriyog.com).
                </p>
                <p className="block my-4 ml-0 mb-[1rem] p-2">
                  The main objective of this digital platform is to create a way
                  of income by using the skills and experience of the human
                  resources who are suffering from the unemployment problem in a
                  proper manner, according to the press release issued by the
                  company.
                </p>
              </div>
            </div>
            <div className="mb-[50px] relative min-h-[100px]">
              <div className="max-md:left-[10%] max-lg:left-[10%]  bg-[#055D59] w-[50px] h-[50px] text-[23px] text-white text-center absolute top-0 left-[50%] -translate-x-1/2 overflow-hidden rounded-full flex items-center justify-center">
                <FaFlask />
              </div>
              <div className="w-[45%] bg-[#efefef]  pb-[20px] ml-auto rounded relative mt-10 max-md:ml-auto max-md:mr-0  max-md:w-[80%]  max-lg:ml-auto max-lg:mr-0 max-lg:w-[80%]">
                <div className="relative inline-block bg-[#055D59] w-full text-[#fff] font-medium text-[20px] py-[15px] rounded-t p-2 whitespace-nowrap  max-md:text-[16px]">
                  <div className="absolute left-[-10px] top-[50%] -translate-y-1/2 w-0 h-0 border-t-[10px]  mb-[20px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-[#055D59] max-md:left-[-10px] max-md:right-auto max-md:border-l-0 max-md:border-r-[10px] max-md:border-r-[#055D59] max-lg:left-[-10px] max-lg:right-auto max-lg:border-l-0 max-lg:border-r-[10px] max-lg:border-r-[#055D59]"></div>
                  Released Android App
                </div>
                <p className="mt-[20px] block my-4 ml-0 p-2">
                  20<sup>th</sup> April, 2018
                </p>
                <p className="block my-4 ml-0 mb-[1rem] p-2">
                  SRIYOG app was released on Google Play store.
                </p>
                <a
                  href="htttps://play.google.com/store/apps/details?id=com.pracasinfosys.sriyog.com"
                  className="bg-[#055D59] hover:bg-[#2e5453] text-white transition-all duration-300 ease-in-out cursor-pointer font-medium text-center inline-block ml-2 py-2 px-6 rounded-md "
                >
                  Browse
                </a>
              </div>
            </div>
            <div className=" relative min-h-[100px]  ">
              <div className="max-md:left-[10%] max-lg:left-[10%] bg-[#055D59] w-[50px] h-[50px] text-[23px] text-white text-center absolute top-0 left-[50%] -translate-x-1/2 overflow-hidden rounded-full flex items-center justify-center">
                <FaBolt />
              </div>
              <div className="w-[45%] bg-[#efefef]  pb-[20px] mr-auto rounded relative mt-10 max-md:ml-auto max-md:mr-0  max-md:w-[80%]  max-lg:ml-auto max-lg:mr-0 max-lg:w-[80%] ">
                <div className="relative inline-block bg-[#055D59] w-full text-[#fff] font-medium text-[20px] py-[15px] p-2 rounded-t whitespace-nowrap  max-md:text-[16px]">
                  <div className="absolute text-center right-[-10px] top-[50%] -translate-y-1/2 w-0 h-0 border-t-[10px]  mb-[20px] border-t-transparent border-b-[10px] border-b-transparent border-l-[10px] border-l-[#055D59] max-md:left-[-10px] max-md:right-auto max-md:border-l-0 max-md:border-r-[10px] max-md:border-r-[#055D59] max-lg:left-[-10px] max-lg:right-auto max-lg:border-l-0 max-lg:border-r-[10px] max-lg:border-r-[#055D59]"></div>
                  Registration
                </div>
                <p className="mt-[20px] block my-4 ml-0 p-2">
                  14<sup>th</sup> June, 2018
                </p>
                <p className="block my-4 ml-0 mb-[1rem] p-2">
                  SRIYOG was registered as &quot;SRIYOG Consulting Pvt.
                  Ltd&quot; on 14 June 2018 in Nepal Government Ministry of
                  Industry, Commerce and Supplies Office of the Company
                  Registrar Tripureshwor, Kathmandu, Nepal.
                </p>
              </div>
            </div>

            <br></br>
            <br />
          </div>
        </div>
      </section>
    </>
  );
};

export default Timeline;
