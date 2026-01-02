"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Ribbon from "@/components/Ribbon";
import toast from "react-hot-toast";
import type { PartnershipFormValues } from "@/src/lib/defination";

type PartnershipResponse =
  | { success: boolean; message: string }
  | { error: string };

const initialFormValues: Omit<PartnershipFormValues, "phoneOrganization" | "personalPhone"> = {
  organizationName: "",
  organizationEmail: "",
  website: "",
  city: "",
  country: "",
  personalName: "",
  personalEmail: "",
  designation: "",
  message: "",
  reason: "",
};

const Partnership: React.FC = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [phoneOrganization, setPhoneOrganization] = useState("");
  const [personalPhone, setPersonalPhone] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const payload: PartnershipFormValues = {
    //   ...formValues,
    //   phoneOrganization,
    //   personalPhone,
    // };

    // try {
    //   const res = await fetch("/api/partnership-form", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(payload),
    //   });

    //   let result: PartnershipResponse;
    //   const contentType = res.headers.get("content-type") || "";

    //   if (contentType.includes("application/json")) {
    //     result = await res.json();
    //   } else {
    //     const raw = await res.text();
    //     console.error("Unexpected response format:", raw);
    //     throw new Error("Invalid server response.");
    //   }

    //   if (!res.ok) {
    //     console.error("Error response:", result);
    //     toast.error("error" in result ? result.error : "Submission failed.");
    //     return;
    //   }

    //   toast.success(
    //     "success" in result ? result.message : "Submitted successfully!"
    //   );
    //   setFormValues(initialFormValues);
    //   setPhoneOrganization("");
    //   setPersonalPhone("");
    // } catch (err) {
    //   console.error("Submission error:", err);
    //   toast.error("Something went wrong.");
    // }
  };

  return (
    <>
      <Ribbon name="Become a Partner" des="" />
      <section className="p-4 max-w-[1180px] mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-stretch justify-center">
            {/* Left */}
            <div className="flex-1">
              <h1 className="font-[800] text-2xl mb-4">
                Organization Information
              </h1>

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
                value={formValues.organizationEmail}
                onChange={handleChange}
                placeholder="Enter organization email"
                className="w-full mt-1 p-2 border border-gray-300 rounded mb-4"
              />

              <label>Landline Number</label>
              <PhoneInput
                country="np"
                value={phoneOrganization}
                onChange={(phone: string) => setPhoneOrganization(phone)}
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

              <label>City</label>
              <input
                name="city"
                value={formValues.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full mt-1 p-2 border border-gray-300 rounded mb-4"
              />

              <label>Country</label>
              <input
                name="country"
                value={formValues.country}
                onChange={handleChange}
                placeholder="Country"
                className="w-full mt-1 p-2 border border-gray-300 rounded mb-4"
              />
            </div>

            {/* Right */}
            <div className="flex-1">
              <h1 className="font-[800] text-2xl mb-4">
                Contact Person Information
              </h1>

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
                value={formValues.personalEmail}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full mt-1 p-2 border border-gray-300 rounded mb-4"
              />

              <label>Mobile Number</label>
              <PhoneInput
                country="np"
                value={personalPhone}
                onChange={(phone: string) => setPersonalPhone(phone)}
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
                className="w-full mt-1 p-2 border border-gray-300 rounded mb-4 h-[200px]"
              />
            </div>
          </div>

          {/* Bottom */}
          <label>Why do you want to become a partner?</label>
          <textarea
            name="reason"
            value={formValues.reason}
            onChange={handleChange}
            placeholder="Tell us your reason…"
            className="w-full mt-1 p-2 border border-gray-300 rounded mb-4 h-[200px]"
          />

          <button
            type="submit"
            className="p-2 px-6 text-white font-[800] bg-[#055D59] mx-auto block"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default Partnership;
