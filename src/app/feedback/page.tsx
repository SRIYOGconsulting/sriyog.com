import Ribbon from "@/components/Ribbon";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { LuMessageCircleMore } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Feedback | SRIYOG Consulting",
  description: "Provide your feedback and suggestions for SRIYOG Consulting.",
  openGraph: {
    title: "Feedback | SRIYOG Consulting",
    description: "Provide your feedback and suggestions for SRIYOG Consulting.",
    url: "https://www.sriyog.com/feedback",
    images: [
      {
        url: "/https://sriyog.com/assets/images/og/default.jpg",
        alt: "Feedback"
      }
    ]
  }
};
const Feedback = () => {
  const name = "Feedback Form";

  return (
    <>
      <Ribbon name={name} des={""} />

      <section className="lg:w-[1180px] max-lg:container max-lg:px-3 w-full mx-auto grid lg:grid-cols-5 md:grid-cols-6 grid-cols-1 gap-0 md:gap-5 lg:gap-10 mb-[45px]">
        <div className="lg:col-span-2 md:col-span-2 col-span-1 w-[88%] mx-auto max-md:mb-[30px]">
          <p className="font-medium text-[1.8rem] max-lg:text-[1.2rem] max-md:text-[1.1rem] mb-4">
            Welcome to the Feature Request and Bug Report Submission Form
          </p>
          <div className="relative mb-4 w-full h-[400px]">
            <Image
              src="/assets/images/feedback/feedback.png"
              fill
              alt="feedback"
              className="object-contain"
            />
          </div>

          <p className="text-justify">
            Use this form to request new features or suggest modifications to
            existing features. Your use of this form is conditioned upon your
            reading and agreeing to the terms and conditions below. You can also
            use this form to report suspected bugs in sriyog.com. We normally
            do not send personal replies to feature requests or bug reports. We
            do, however, read each and every message. We use the information to
            improve our products and services. Your comments, suggestions, and
            ideas for improvements are very important to us.
          </p>
        </div>
        <div className="bg-[#efefef] rounded-md max-md:rounded-none lg:col-span-3 p-12 max-lg:p-8  max-md:px-8 max-lg:col-span-4">
          <p className="font-medium text-[1.8rem] flex gap-2 items-center mb-4 max-lg:text-[1.2rem] max-md:text-[1.1rem]">
            <LuMessageCircleMore className="text-4xl max-md:text-2xl" />
            Suggestion/Feedback for a feature
          </p>
          <p className="text-justify mb-4 ">
            Fill in the details below regarding any new feature you wish to be
            implemented in Sriyog website. Your feedback and suggestions are
            highly appreciated.{" "}
          </p>
          <p className="mb-4">Please provide your details.</p>
          <form action="">
            <div className="mb-4">
              <label htmlFor="name">Full Name</label>
              <br />
              <input
                type="text"
                name=""
                id="name"
                placeholder="Pracas Upreti"
                required
                className="w-full p-2 rounded-md border border-[#4b4b4b] focus:outline-none mt-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="city">City</label>
              <br />
              <input
                type="text"
                name=""
                id="city"
                placeholder="Kathmandu"
                required
                className="w-full p-2 rounded-md border border-[#4b4b4b] focus:outline-none mt-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phn">Phone Number</label>
              <br />
              <input
                type="text"
                name=""
                id="phn"
                placeholder="+977-981234XXXX"
                required
                className="w-full p-2 rounded-md border border-[#4b4b4b] focus:outline-none mt-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email">Email Address</label>
              <br />
              <input
                type="email"
                name=""
                id="email"
                placeholder="eg: Youndhen@sriyog.com"
                required
                className="w-full p-2 rounded-md border border-[#4b4b4b] focus:outline-none mt-2"
              />
              <span className="text-sm max-md:text-xs mx-2">
                We will never share your email address with anyone.
              </span>
            </div>
            <div className="mb-4">
              <textarea
                name=""
                id=""
                placeholder="Please write your message"
                className="h-32 w-full px-4 py-3 rounded-md border border-[#4b4b4b] focus:outline-none"
              ></textarea>
            </div>
          </form>
          <input
            type="submit"
            name=""
            id=""
            value="submit"
            className="cursor-pointer hover:bg-[#335c5a] transition-all duration-300 ease-in-out px-4 py-2 bg-[#055d59] text-white font-bold rounded-md"
          />
        </div>
      </section>
    </>
  );
};

export default Feedback;
