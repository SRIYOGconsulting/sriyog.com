"use client";
import Ribbon from "@/components/Ribbon";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";




export default function ReferPage() {
  const [phoneOrganization, setPhoneOrganization] = useState<string>("");
  const [personalPhone, setPersonPhone] = useState<string>("");
  const [focusStates, setFocusStates] = useState({
    fullName: false,
    email: false,
    organizationName: false,
    designation: false,
    additionalNotes: false,
    clientName: false,
    clientContact: false,
    clientEmail: false,
    clientBusinessType: false,
    reason: false,
  });

  const inputField =
    "w-full  mt-1 outline-none bg:[#FFFFFF] shadow-[#CBD0DB2E] shadow-xl p-2  border-[#EAEAEA] border-1 rounded mb-4";

  return (
    <>
      <Ribbon name="Refer a Client" des="" />
      <section className=" p-4 max-w-[1180px] mx-auto">
        <form action="">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-stretch align-center justify-center ">
            {/* Left Column */}
            <div className="flex-1">
              <h1 className="font-[800] text-2xl mb-4">Your Information</h1>

              <div>
                <label>Your Full Name</label>
                <input
                  type="text"
                  placeholder={
                    focusStates.fullName ? "" : "Enter your full name"
                  }
                  onFocus={() =>
                    setFocusStates({ ...focusStates, fullName: true })
                  }
                  onBlur={(e) =>
                    setFocusStates({
                      ...focusStates,
                      fullName: e.target.value ? true : false,
                    })
                  }
                  className={inputField}
                />
              </div>

              <div>
                <label>Email</label>
                <input
                  type="text"
                  placeholder={focusStates.email ? "" : "Enter email"}
                  onFocus={() =>
                    setFocusStates({ ...focusStates, email: true })
                  }
                  onBlur={(e) =>
                    setFocusStates({
                      ...focusStates,
                      email: e.target.value ? true : false,
                    })
                  }
                  className={inputField}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">
                  Phone Number
                </label>
                <PhoneInput
                  country={"np"}
                  value={phoneOrganization}
                  onChange={(phone: string) => setPhoneOrganization(phone)}
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: false,
                  }}
                  inputStyle={{
                    width: "100%",
                    paddingLeft: "48px",
                    fontSize: "16px",
                  }}
                  placeholder="+977 98XXXXXXXX"
                  enableSearch
                  disableDropdown={false}
                  countryCodeEditable={false}
                />
              </div>

              <div className="mt-4">
                <label>Organization / Company Name</label>
                <input
                  type="text"
                  placeholder={
                    focusStates.organizationName ? "" : "Enter your full name"
                  }
                  onFocus={() =>
                    setFocusStates({ ...focusStates, organizationName: true })
                  }
                  onBlur={(e) =>
                    setFocusStates({
                      ...focusStates,
                      organizationName: e.target.value ? true : false,
                    })
                  }
                  className={inputField}
                />
              </div>

              <div>
                <label>Designation</label>
                <input
                  type="text"
                  placeholder={
                    focusStates.designation ? "" : "Enter your designation"
                  }
                  onFocus={() =>
                    setFocusStates({ ...focusStates, designation: true })
                  }
                  onBlur={(e) =>
                    setFocusStates({
                      ...focusStates,
                      designation: e.target.value ? true : false,
                    })
                  }
                  className={inputField}
                />
              </div>

              <div>
                <label>Your Relationship to the Referred Client</label>
                <select className={inputField}>
                  <option value="">Please select an option</option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>
            </div>

            {/* Right Column */}
            <div className="sm:flex-1 w-full">
              <h1 className="font-[800] text-2xl mb-4">
                Contact Person Information
              </h1>

              <div>
                <label>Client Name</label>
                <input
                  type="text"
                  placeholder={
                    focusStates.clientName
                      ? ""
                      : "Full name if individual, or company name if business"
                  }
                  onFocus={() =>
                    setFocusStates({ ...focusStates, clientName: true })
                  }
                  onBlur={(e) =>
                    setFocusStates({
                      ...focusStates,
                      clientName: e.target.value ? true : false,
                    })
                  }
                  className={inputField}
                />
              </div>

              <div>
                <label>Client Contact Person (Optional)</label>
                <input
                  type="text"
                  placeholder={
                    focusStates.clientContact
                      ? ""
                      : "Only if the client is a company"
                  }
                  onFocus={() =>
                    setFocusStates({ ...focusStates, clientContact: true })
                  }
                  onBlur={(e) =>
                    setFocusStates({
                      ...focusStates,
                      clientContact: e.target.value ? true : false,
                    })
                  }
                  className={inputField}
                />
              </div>

              <div>
                <label>Client Email</label>
                <input
                  type="text"
                  placeholder={
                    focusStates.clientEmail ? "" : "Enter client's email"
                  }
                  onFocus={() =>
                    setFocusStates({ ...focusStates, clientEmail: true })
                  }
                  onBlur={(e) =>
                    setFocusStates({
                      ...focusStates,
                      clientEmail: e.target.value ? true : false,
                    })
                  }
                  className={inputField}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">
                  Phone Number
                </label>
                <PhoneInput
                  country={"np"}
                  value={personalPhone}
                  onChange={(phone: string) => setPersonPhone(phone)}
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: false,
                  }}
                  inputStyle={{
                    width: "100%",
                    paddingLeft: "48px",
                    fontSize: "16px",
                  }}
                  placeholder="+977 98XXXXXXXX"
                  enableSearch
                  disableDropdown={false}
                  countryCodeEditable={false}
                />
              </div>

              <div className="mt-4">
                <label>Client Industry / Business Type</label>
                <input
                  type="text"
                  placeholder={
                    focusStates.clientBusinessType
                      ? ""
                      : "Example: Retail, Finance, Healthcare"
                  }
                  onFocus={() =>
                    setFocusStates({
                      ...focusStates,
                      clientBusinessType: true,
                    })
                  }
                  onBlur={(e) =>
                    setFocusStates({
                      ...focusStates,
                      clientBusinessType: e.target.value ? true : false,
                    })
                  }
                  className={inputField}
                />
              </div>

              <div className="">
                <label>Why Are You Referring Them?</label>
                <input
                  type="text"
                  placeholder={
                    focusStates.reason
                      ? ""
                      : "Tell us why you are referring them — the more detail, the better."
                  }
                  onFocus={() =>
                    setFocusStates({ ...focusStates, reason: true })
                  }
                  onBlur={(e) =>
                    setFocusStates({
                      ...focusStates,
                      reason: e.target.value ? true : false,
                    })
                  }
                  className={inputField}
                />
              </div>
            </div>
          </div>

          {/* Bottom textarea */}
          <div>
            <label>
              Additional Notes <span className="italic">(Optional)</span>
            </label>
            <textarea
              placeholder={
                focusStates.additionalNotes
                  ? ""
                  : "Anything else we should know?"
              }
              onFocus={() =>
                setFocusStates({ ...focusStates, additionalNotes: true })
              }
              onBlur={(e) =>
                setFocusStates({
                  ...focusStates,
                  additionalNotes: e.target.value ? true : false,
                })
              }
              className={`${inputField} h-[300px]`}
            ></textarea>
          </div>

          <div className="text-sm text-[#555555] mt-6 gap-1 flex flex-col">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="bg-[#555555]" />{" "}
              <label>
                I confirm I have the referred client&apos;s permission to share
                their contact information.
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" />{" "}
              <label>
                I understand that submitting this referral does not guarantee
                compensation unless specified in a formal agreement.
              </label>
            </div>
          </div>

          <div className="w-full flex items-center justify-center mt-10">
            <button
              type="submit"
              className="py-1 px-6  mb-24 text-white font-[800] bg-[#383838] border-[#055D59]-1 rounded-sm "
            >
              Send Referal
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
