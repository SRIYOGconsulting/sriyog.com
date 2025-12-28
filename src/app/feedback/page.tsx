'use client'
import Ribbon from "@/components/Ribbon";
import { Metadata } from "next";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import { LuMessageCircleMore } from "react-icons/lu";

type Form = {
  fullname: string;
  email:string;
  message:string;
  phone:string;
  city:string;
}

const Feedback = () => {
  const name = "Feedback Form";
  const [isSubmitting,setIsSubmitting] = useState<boolean>(false);
  const [submitted,setSubmitted] = useState<boolean>(false);
  const [form,setform] = useState<Form>({
       fullname : "",
       email : "",
       city : "",
       phone : "",
       message: "",
  })
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>{
      setform({...form,[e.target.name]: e.target.value});
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);
      try {
        const res = await fetch("/api/feedback-form", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
  
        const data = await res.json();
  
        if (!res.ok) {
          console.error(data.error);
          alert("Failed to submit form: " + data.error);
        } else {
          console.log("Form submitted successfully!");
          setSubmitted(true)
        }
      } catch (err) {
        console.error(err);
        alert("An error occurred. Try again.");
      }finally{
        setIsSubmitting(false);
        setform({
            fullname : "",
            email : "",
            city : "",
            phone : "",
            message: "",
        })
      }
    };
  return (
    <>
      <Ribbon name={name} des={""} />
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="text-white bg-[#055d59] rounded-lg p-5 w-[90%] max-w-md text-center shadow-xl">
            <h2 className="text-xl font-semibold mb-3">
              Submitted Successfully
            </h2>
            <p className=" mb-5">
              Thank you! Your Feedback has been submitted successfully.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-[#055d59] text-white border cursor-pointer active:bg-gray-300 active:text-[#055d59] hover:bg-white hover:text-[#055d59] border-white px-5 py-0.5 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
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
          <form action="" onSubmit={handleSubmit} method="POST">
            <div className="mb-4">
              <label htmlFor="name">Full Name</label>
              <br />
              <input
                value={form.fullname}
                onChange={handleChange}
                type="text"
                name="fullname"
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
                value={form.city}
                onChange={handleChange}
                type="text"
                name="city"
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
                value={form.phone}
                onChange={handleChange}
                type="text"
                name="phone"
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
                value={form.email}
                onChange={handleChange}
                type="email"
                name="email"
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
                value={form.message}
                onChange={handleChange}
                required
                name="message"
                id=""
                placeholder="Please write your message"
                className="h-32 w-full px-4 py-3 rounded-md border border-[#4b4b4b] focus:outline-none"
              ></textarea>
            </div>
            <input
            type="submit"
            name=""
            id=""
            value={isSubmitting ? "Submitting..." : "Submit"}
            className="cursor-pointer hover:bg-[#335c5a] transition-all duration-300 ease-in-out px-4 py-2 bg-[#055d59] text-white font-bold rounded-md"
          />
          </form>
          
        </div>
      </section>
    </>
  );
};

export default Feedback;
