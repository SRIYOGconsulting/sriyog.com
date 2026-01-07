"use client";

import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Ribbon from "@/components/Ribbon";
import Select from "react-select";
import type { PartnershipFormValues } from "@/src/lib/defination";
import { countries } from "@/data/countries";

type PartnershipResponse =
  | { success: boolean; message: string }
  | { error: string };

const initialFormValues: PartnershipFormValues = {
  organizationName: "",
  organizationEmail: "",
  website: "",
  city: "",
  country: "",
  organizationPhone:"",
  personalPhone:"",
  personalName: "",
  personalEmail: "",
  designation: "",
  message: "",
  reason: "",
};

const Partnership: React.FC = () => {
  const [isSubmitting,setIsSubmitting] = useState<boolean>(false);
  const [dots, setDots] = useState("");
  const [submitted,setSubmitted] = useState<boolean>(false);
  const [formValues, setFormValues] = useState(initialFormValues);
  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      borderColor: state.isFocused ? "#055d59" : "#EAEAEA", // change color when focused
      boxShadow: state.isFocused ? "0 0 0 1px #055d59" : "none",
      "&:hover": {
        borderColor: "#055d59", // border color on hover
      },
    }),
    menu: (provided: any) => ({
        ...provided,
        height: "100px", 
        overflow: "hidden", 
    }),
    menuList: (provided: any) => ({
        ...provided,
        maxHeight: "100px", 
        overflowY: "auto",
    }),
  };

  useEffect(() => {
    if (!isSubmitting) {
      setDots("");
      return;
    }

    const interval = setInterval(() => {
      setDots(prev => (prev.length < 3 ? prev + "." : ""));
    }, 500);

    return () => clearInterval(interval);
  }, [isSubmitting]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);
      try {
        const res = await fetch("/api/partnership-form", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formValues),
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
       
      }
    };

  return (
    <>
      <Ribbon name="Become a Partner" des="" />
       {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="text-white bg-[#055d59] rounded-lg p-5 w-[90%] max-w-md text-center shadow-xl">
            <h2 className="text-xl font-semibold mb-3">
              Submitted Successfully
            </h2>
            <p className=" mb-5">
              Thank you! Your application has been submitted successfully.
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
      <section className="p-4 max-w-[1180px] mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-stretch justify-center">
            {/* Left */}
            <div className="flex-1">
              <div className="flex items-center justify-center border-b mb-6 border-gray-600 max-w-sm mx-auto ">
              <h1 className="font-[800] text-2xl text-center  pb-2 ">
                Organization Information
              </h1>
              </div>
              <label>Name of Organization</label>
              <input
                name="organizationName"
                value={formValues.organizationName}
                onChange={handleChange}
                placeholder="Enter your organization name"
                className="w-full mt-1 p-2 border border-gray-300 rounded mb-4"
              />

              <label>Email</label>
              <input
                name="organizationEmail"
                type="email"
                required
                value={formValues.organizationEmail}
                onChange={handleChange}
                placeholder="Enter organization email"
                className="w-full mt-1 p-2 border border-gray-300 rounded mb-4"
              />
              <div className="mb-4">
                <label className="block mb-1">Country</label>
                <Select
                  required
                  isClearable
                  instanceId="country"
                  styles={customStyles}
                  options={countries}
                  isSearchable
                  onChange={selected => setFormValues({...formValues,country: selected?.value as string})}
                />
              </div>
              <label>City</label>
              <input
                name="city"
                required
                value={formValues.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full mt-1 p-2 border border-gray-300 rounded mb-4"
              />
              <label>Landline Number</label>
              <PhoneInput
                country="np"
                value={formValues.organizationPhone}
                onChange={(phone: string) => setFormValues({...formValues,organizationPhone:phone})}
                inputProps={{
                    required: true,
                    autoFocus: false,
                }}
                inputStyle={{
                  width: "100%",
                  paddingLeft: "48px",
                  fontSize: "16px",
                }}
                placeholder="+977 1XXXXXXX"
              />

              <label className="mt-4 block">Website</label>
              <input
                name="website"
                value={formValues.website}
                onChange={handleChange}
                placeholder="Enter website URL"
                className="w-full mt-1 p-2 border border-gray-300 rounded mb-4"
              />
              
            </div>

            {/* Right */}
            <div className="flex-1">
              <div className="flex items-center justify-center border-b mb-6 border-gray-600 max-w-sm mx-auto ">
              <h1 className="font-[800] text-2xl pb-2">
                Contact Person Information
              </h1>
              </div>
              <label>Your Name</label>
              <input
                name="personalName"
                value={formValues.personalName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full mt-1 p-2 border border-gray-300 rounded mb-4"
              />

              <label>Your Email</label>
              <input
                name="personalEmail"
                type="email"
                required
                value={formValues.personalEmail}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full mt-1 p-2 border border-gray-300 rounded mb-4"
              />

              <label className="block mt-1.5">Mobile Number</label>
              <PhoneInput
                country="np"
                value={formValues.personalPhone}
                onChange={(phone: string) => setFormValues({...formValues,personalPhone:phone})}
                inputProps={{
                    required: true,
                    autoFocus: false,
                }}
                inputStyle={{
                  width: "100%",
                  paddingLeft: "48px",
                  fontSize: "16px",
                }}
                placeholder="+977 98XXXXXXXX"
              />

              <label className="mt-4 block">Designation</label>
              <input
                name="designation"
                required
                value={formValues.designation}
                onChange={handleChange}
                placeholder="Enter your designation"
                className="w-full mt-1 p-2 border border-gray-300 rounded mb-4"
              />

              <label>Additional Message</label>
              <textarea
                name="message"
                value={formValues.message}
                onChange={handleChange}
                placeholder="Anything else to share…"
                className="w-full mt-1 p-2 border border-gray-300 rounded mb-4 h-[118px]"
              />
            </div>
          </div>

          {/* Bottom */}
          <label>Why do you want to become a partner?</label>
          <textarea
            name="reason"
            required
            value={formValues.reason}
            onChange={handleChange}
            placeholder="Tell us your reason…"
            className="w-full mt-1 p-2 border border-gray-300 rounded mb-4 h-[200px]"
          />
          
          <div className="space-y-2">
           <div className="flex items-start sm:items-center gap-2">
              <input type="checkbox"  required   className="bg-[#555555] cursor-pointer mt-1.5 sm:mt-0" />{" "}
              <label className="text-sm text-gray-600">
                I confirm that the information provided in this partnership application is true, accurate, and complete to the best of my knowledge.
              </label>
            </div>
            <div className="flex items-start sm:items-center gap-2">
              <input type="checkbox" className="cursor-pointer mt-1.5 sm:mt-0" required  />{" "}
              <label className="text-sm text-gray-600">
                I agree to be contacted by your company regarding this partnership application and understand that further discussions may be required.
              </label>
            </div>
          </div>

          <div className="w-full flex justify-center mt-10 mb-16">
            <button
              type="submit"
              className="py-2 cursor-pointer px-10 text-white font-[800] bg-[#383838] rounded-sm hover:bg-[#555]"
            >
              {isSubmitting ? `Submitting${dots}` : "Submit"} 
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Partnership;
