"use client";
import Ribbon from "@/components/Ribbon";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ChangeEvent, useEffect, useState } from "react";

type Form = {
    fullName: string,
    email: string,
    organizationName: string,
    designation: string,
    phone: string,
    additionalNotes: string,
    clientName: string,
    clientContact: string,
    clientEmail: string,
    clientPhone: string,
    clientBusinessType: string,
    reason: string,
    relation: string,
}


export default function Refer() {
  const [isSending,setIsSending] = useState<boolean>(false);
  const [submitted,setSubmitted] = useState<boolean>(false);
  const [dots, setDots] = useState("");
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
  const [form, setForm] = useState<Form>({
    fullName: "",
    email: "",
    organizationName: "",
    designation: "",
    phone: "",
    additionalNotes: "",
    clientName: "",
    clientContact: "",
    clientEmail: "",
    clientPhone: "",
    clientBusinessType: "",
    reason: "",
    relation: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)=>{
    setForm({...form,[e.target.name]: e.target.value})
  }

  useEffect(() => {
    if (!isSending) {
      setDots("");
      return;
    }

    const interval = setInterval(() => {
      setDots(prev => (prev.length < 3 ? prev + "." : ""));
    }, 500);

    return () => clearInterval(interval);
  }, [isSending]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSending(true);
      try {
        const res = await fetch("/api/refer-form", {
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
        setIsSending(false);
       
      }
    };
  const inputField =
    "w-full  mt-1 outline-none bg:[#FFFFFF] shadow-[#CBD0DB2E] shadow-xl p-2  border-[#EAEAEA] border-1 rounded mb-6";

  return (
    <>
      <Ribbon name="Refer a Client" des="" />
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="text-white bg-[#055d59] rounded-lg p-5 w-[90%] max-w-md text-center shadow-xl">
            <h2 className="text-xl font-semibold mb-3">
              Sent Successfully
            </h2>
            <p className=" mb-5">
              Thank you! Your referral has been sent successfully.
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
      <section className=" p-4 max-w-[1180px] mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-stretch align-center justify-center ">
            {/* Left Column */}
            <div className="flex-1">
              <h1 className="font-[800] text-center mx-auto text-2xl mb-8 border-b border-gray-600 max-w-md pb-1">Your Information</h1>

              <div>
                <label>Your Full Name</label>
                <input
                  required
                  pattern="^[A-Za-z ]+$"
                  type="text"
                  placeholder={
                    focusStates.fullName ? "" : "Enter your full name"
                  }
                  name="fullName"
                  onChange={handleChange}
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
                  required
                  type="email"
                  name="email"
                  onChange={handleChange}
                  inputMode="email"
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

              <div className="block mb-7">
                <label htmlFor="phone" className="block mb-1 font-medium">
                  Phone Number
                </label>
                <PhoneInput
                  country={"np"}
                  value={form.phone}
                  onChange={(phone) => setForm({...form,phone: phone})}
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: false,
                  }}
                  inputStyle={{
                    width: "100%",
                    height:"40px",
                    paddingLeft: "48px",
                    fontSize: "16px",
                    borderBlockColor:"#eeeeee",
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
                  required
                  pattern="^[A-Za-z ]+$"
                  name="organizationName"
                  onChange={handleChange}
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
                  required
                  name="designation"
                  onChange={handleChange}
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
                <select required className={inputField} name="relation" onChange={handleChange}>
                  <option value="">Please select an option</option>
                  <option value="Vendor">Vendor</option>
                  <option value="Friend">Friend</option>
                  <option value="Agent">Agent</option>
                  <option value="Business Partner">Business Partner</option>
                </select>
              </div>
            </div>

            {/* Right Column */}
            <div className="sm:flex-1 w-full">
              <h1 className="font-[800] text-center mx-auto text-2xl mb-8 border-b border-gray-600 max-w-md pb-1">
                Contact Person Information
              </h1>

              <div>
                <label>Client Name</label>
                <input
                  required
                  pattern="^[A-Za-z ]+$"
                  name="clientName"
                  onChange={handleChange}
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
                  pattern="^[A-Za-z ]+$"
                  type="text"
                  name="clientContact"
                  onChange={handleChange}
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
                  required
                  inputMode="email"
                  name="clientEmail"
                  onChange={handleChange}
                  type="email"
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

              <div className="block mb-7">
                <label htmlFor="phone" className="block mb-1.5 font-medium">
                  Phone Number
                </label>
                <PhoneInput
                  country={"np"}
                  value={form.clientPhone}
                  onChange={(phone: string) => setForm({...form,clientPhone:phone})}
                  inputProps={{
                    name: "clientPhone",
                    required: true,
                    autoFocus: false,
                  }}
                  inputStyle={{
                    width: "100%",
                    paddingLeft: "48px",
                    fontSize: "16px",
                    borderBlockColor:"#eeeeee",
                    height:"40px"
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
                  required
                  name="clientBusinessType"
                  onChange={handleChange}
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
                <select required className={inputField} name="reason" onChange={handleChange}>
                  <option value="">Please select an option</option>
                  <option value="Expecting 10% Commission">Expecting 10% Commission</option>
                  <option value="Friend">Friend</option>
                  <option value="20% Startup Discount">20% Startup Discount</option>
                  <option value="Marketing Training">Marketing Training</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Bottom textarea */}
          <div>
            <label>
              Additional Notes <span className="italic">(Optional)</span>
            </label>
            <textarea
              name="additionalNotes"
              onChange={handleChange}
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

          <div className="text-sm text-[#555555] mt-6 gap-4 flex flex-col">
            <div className="flex items-start sm:items-center gap-2">
              <input type="checkbox"  required   className="bg-[#555555] cursor-pointer mt-1.5 sm:mt-0" />{" "}
              <label>
                I confirm I have the referred client&apos;s permission to share
                their contact information.
              </label>
            </div>
            <div className="flex items-start sm:items-center gap-2">
              <input type="checkbox" className="cursor-pointer mt-1.5 sm:mt-0" required  />{" "}
              <label className="">
                I understand that submitting this referral does not guarantee
                compensation unless specified in a formal agreement.
              </label>
            </div>
          </div>

          <div className="w-full flex items-center justify-center mt-10">
            <button
              type="submit"
              className="py-1 cursor-pointer  active:bg-[#7a7a7a] hover:bg-[#464646] px-6  mb-24 text-white font-[800] bg-[#383838] border-[#055D59]-1 rounded-sm "
            >
              {isSending ? `Sending${dots}` : "Send Referal"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
