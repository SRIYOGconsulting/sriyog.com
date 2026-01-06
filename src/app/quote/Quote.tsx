"use client";

import { useEffect, useRef, useState } from "react";
import Ribbon from "@/components/Ribbon";
import "react-phone-input-2/lib/style.css";
import Select, { MultiValue, SingleValue } from "react-select";
import { countries, countriesDialCodes } from "@/data/countries";

const inputStyle =
  "w-full mt-1 outline-none focus:border-2 focus:border-[#055d59] bg-white shadow-[#CBD0DB2E] shadow-xl p-2 border-[#EAEAEA] border rounded mb-4";

const labelStyle = "text-sm font-medium";


type FormData = {
  name: string;
  address: string;
  contact: string;
  phonenumber: number | null;
  country:string;
  email: string;
  WhatsApp: string;
  service: option[];
  budget: string;
  competitor: string;
  code:string;
  reference: string;
  startDate: string;
  endDate: string;
  scope: string;
  technology: string;
  business: string;
  monthlyBudget: string;
  vendor: string;
  registration: string;
  industry: string;
  organizationType:string;
  panvat: number | null;
  referralName: string;
  referralPhone: string;
  how: string;
  message: string;
};

type option ={
  label:string;
  value:string
}

const Quote = () => {
  const [isSubmitting,setIsSubmitting] = useState<boolean>(false);
  const [submitted,setSubmitted] = useState<boolean>(false);
  const [dots, setDots] = useState("");
  const [StartdateError,setStartDateError] = useState<boolean>(false);
  const [EnddateError,setEndDateError] = useState<boolean>(false);
  const dateRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({
    name: "",
    address: "",
    contact: "",
    code:"",
    phonenumber: "",
    email: "",
    country:"",
    WhatsApp: "",
    service: [],
    budget: "",
    competitor: "",
    reference: "",
    startDate: "",
    endDate: "",
    scope: "",
    technology: "",
    business: "",
    monthlyBudget: "",
    vendor: "",
    registration: "",
    organizationType:"",
    industry: "",
    panvat: null,
    referralName: "",
    referralPhone: "",
    how: "",
    message: "",
  });

  useEffect(()=>{
    const getDialCodeByCountry = (country: string): string => {
      const found = countriesDialCodes.find(
        c => c.label.toLowerCase() === country.toLowerCase()
      );
      setForm({...form, code:found?.value ?? ""})
      return found?.value ?? "";
    };
    getDialCodeByCountry(form.country)
  },[form.country])



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

  const handleSelectSearchChange = <K extends keyof FormData>(
    selected: SingleValue<option> | MultiValue<option> | null,
    name: K,
    isMulti: boolean
  ) => {
    if (!selected) {
      setForm(prev => ({ ...prev, [name]: isMulti ? [] : "" }));
      return;
    }

    if (isMulti) {
      const values = selected as MultiValue<option>; 
      setForm(prev => ({ ...prev, [name]: values }));
    } else {
      const value = (selected as SingleValue<option>)?.value ?? "";
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const servicesOptions: option[] = [
    "Website Redesigning",
    "Facebook Marketing",
    "Website Update",
    "Website Development",
    "Data Analysis",
    "Lead Generation",
    "Facebook Boosting",
    "eCommerce Solutions",
    "Logo Desigining",
    "Software Development",
    "Search Engine Optimization",
    "Data Banking",
    "Website Analysis",
    "Cloudflare Solutions",
    "Digital Branding",
    "Mobile App Development",
    "Business eMail",
    "Others",
    ].map(service => ({
      label: service,
      value: service,
  }));

  const industryOptions: option[] = [
    "Agriculture and Farming",
    "Forestry and Logging",
    "Mining and Quarrying",
    "Automotive",
    "Textiles and Apparel",
    "Food and Beverage",
    "Construction and Building Materials",
    "Electronics and Electrical Equipment",
    "Chemicals and Pharmaceuticals",
    "Furniture and Wood Products",
    "Healthcare and Medical",
    "Education",
    "Financial Services",
    "Retail and E-Commerce",
    "Hospitality and Tourism",
    "Transportation and Logistics",
    "Entertainment and Media",
    "Telecommunications",
    "Real Estate",
    "Information Technology",
    "Research and Development",
    "Consulting Services",
    "Education and Training Services",
    "Government Services",
    "Non-Profit and NGOs",
    "Executive and Leadership Services",
    "Startup",
    "Club / Union",
    "Other",
  ].map((service)=>({
    label:service,
    value: service,
  }));


  const businessStatuses = [
    "Yes",
    "Above Breakeven Point",
    "Meeting Breakeven Point",
    "No",
    "Bleeding Phase",
    "Other",
  ];

  const budgets = [
    "Above USD 1000 yearly",
    "Below USD 1000 yearly",
  ];

  const registrationTypes = [
    "Nagarpalika",
    "Gharelu",
    "Office of The Company Registrar (Pvt. Ltd)",
    "Social Welfare Council",
    "CDO Office",
    "INGO",
    "Social Organization",
    "LLC",
    "FZ LLC", 
    "Corporation",
    "Union/ Club/ Community Based Organization",
    "Others",
  ];

  const KnowingUsMethod:option[] = [
  "Facebook",
  "Magazine",
  "Newspaper",
  "Referred By SRIYOG Consulting Client",
  "Referred By Friend",
  "Portfolio Of SRIYOG Consulting",
  "YouTube",
  "Instagram",
  "Events",
  "Webinars",
  "Employee Of SRIYOG",
  "Google Search",
  "Google Ads",
  "LinkedIn",
  "X {Twitter}",
  "Agent",
  "Other"
  ].map((service)=>({
    label:service,
    value:service
  }))

  const OrganizationTypes:option[] = [
  "Advertising and Marketing",
  "Aerospace",
  "Agriculture",
  "Computer and Technology",
  "Construction",
  "Education",
  "Energy / Hydropower",
  "Entertainment",
  "Fashion",
  "Finance and Economic",
  "Real Estate",
  "Food and Beverage",
  "Hospitality",
  "Manufacturing",
  "Media and News",
  "Mining",
  "Pharmaceutical",
  "Telecommunication",
  "Transportation",
  "Other"
  ]
  .map((service)=>({
    label:service,
    value:service
  }))
  const MonthlyBudget= [
    "$49 Per Month ( Paid Yearly )",
    "$99 Per Month ( Paid Yearly )",
    "$149 Per Month ( Paid Yearly )",
    "$60 Per Month ( Paid Monthly )",
    "$120 Per Month ( Paid Monthly )",
    "$180 Per Month ( Paid Monthly )",
    "Above $250 Monthly",
  ]


  

  useEffect(() => {
    const now = Date.now();
    const end = new Date();
    const plus7Days = new Date(end);
    plus7Days.setDate(end.getDate() + 7);
    if (form.startDate) {
      setStartDateError(new Date(form.startDate).getTime() < now);
    } else {
      setStartDateError(false);
    }

    if (form.endDate) {
      setEndDateError(new Date(form.endDate).getTime() < plus7Days.getTime());
    } else {
      setEndDateError(false);
    }
  }, [form.startDate, form.endDate]);


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
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(StartdateError || EnddateError){dateRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }) ; return};
    console.log(form)
    setIsSubmitting(true)
    try {
        const res = await fetch("/api/quote-form", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
  
        const data = await res.json();
        console.log(data);
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
  } 


  const renderSelect = (
    id: keyof typeof form,
    label: string,
    options: string[],
    obligatory: boolean,
  ) => (
    <div key={id}>
      <label htmlFor={id} className={labelStyle}>
        {label}
      </label>
      <select
        id={id}
        required={obligatory}
        value={form[id] as string}
        onChange={handleChange}
        className={inputStyle}
      >
        <option value="">Select</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );


  const renderSelectSearch = <K extends keyof FormData>(
    label: string,
    name: K,
    options: option[],
    multi:boolean,
    required:boolean
  ) =>  (
      <div className="mb-4">
        <label className="block mb-1">{label}</label>
        <Select<option,boolean>
          required = {required}
          isClearable
          instanceId={name as string}
          isMulti={multi as boolean}
          styles={customStyles}
          options={options}
          isSearchable
          onChange={selected => handleSelectSearchChange(selected, name, multi)}
        />
      </div>
    );

  const renderInput = (
    id: keyof typeof form,
    label: string,
    type: "text" | "email" | "date" | "url" | "tel" | "number" = "text",
    obligatory: boolean,
  ) => (
    <div key={id}>
      <label htmlFor={id} className={labelStyle}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        required = {obligatory}
        value={form[id] ? form[id] : ""}
        onChange={handleChange}
        placeholder={`Enter ${id ==="phonenumber" ? "Phone Number" : label.toLowerCase()}`}
        className={inputStyle}
      />
    </div>
  );



  return (
    <>
      <Ribbon name="Quote" des="" />
      <section className="max-w-[1180px] mx-auto p-4 md:px-0">
        {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="text-white bg-[#055d59] rounded-lg p-5 w-[90%] max-w-md text-center shadow-xl">
            <h2 className="text-xl font-semibold mb-3">
              Submitted Successfully
            </h2>
            <p className=" mb-5">
              Thank you! Your request has been submitted successfully.
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
        <h1 className="text-3xl font-bold mb-4">IT Service Quotation</h1>
        <p className="text-sm mb-3">
          We prioritize understanding your unique requirements, delivering personalized solutions
          that align with your goals, and maintaining high levels of security to protect your data.
        </p>
        <p className="text-sm mb-3">
          Whether you’re a startup, an established business, or a government entity, our focus on
          excellence and customer satisfaction makes us the IT partner you can trust.
        </p>
        <p className="text-sm mb-10">
          Please fill your requirements so that we can provide you the best proposal & pricing.
        </p>

        <form onSubmit={handleSubmit} className="" method="POST">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {renderInput("contact", "Contact Person Name *","text",true)}
             {renderSelectSearch('Country','country',countries,false,true)}
             {renderInput("address", "Address / City *","text",true)}
            <div>
              <label className={labelStyle}>Phone Number *</label>
              <div className={`flex items-center ${form.code ? "gap-1" : "gap-0"}`}>
                <div className="bg-white shadow-[#CBD0DB2E] rounded shadow-xl mb-3 border border-[#EAEAEA]">
                {form.code && 
                <h1 className="h-[40px] px-2 py-2">{form.code}</h1>
                }
                </div>
                <div className="w-full">
                {renderInput('phonenumber','','tel',true)}
                </div>
              </div>
            </div>         
            {renderInput("name", "Name of Organization *","text",true)}
            {renderInput("email", "Email *", "email",true)}
            {renderInput("WhatsApp", "WhatsApp Number","text",false)}
            {renderSelectSearch('Select Services','service',servicesOptions,true,false)}
            {renderSelect("budget", "Project Budget (USD) *", budgets,true)}
            {renderInput("competitor", "Competitor Name","text",false,)}
            {renderInput("reference", "Reference Website URL","text",false)}
            {renderInput("scope", "Scope of Work","text",false)}
            <div ref={dateRef} className="relative">
            {renderInput("startDate", "Project Start Date", "date",false)}
            {StartdateError && <h1 className="absolute -bottom-1 text-sm text-red-600">Start Date cannot be earlier than minimum</h1>}
            </div>
            <div className="relative">
            {renderInput("endDate", "Project End Date", "date",false)}
            {EnddateError && <h1 className="absolute -bottom-1 text-sm text-red-600">Date must be at least 7 days from today</h1>}
            </div>
            {renderInput("technology", "Preferred Tech Stack","text",false)}
            {renderSelect("business", "Is your business profitable? *", businessStatuses,true)}
            {renderSelect("monthlyBudget", "Monthly IT Budget", MonthlyBudget,false)}
            {renderInput("vendor", "Existing IT Vendor","text",false)}
            {renderSelect("registration", "Registration Type *", registrationTypes,true)}
            
            <div className="relative">
              {renderSelectSearch('Industry Type','industry',industryOptions,false,true)}
            </div>
            
            <div className="relative">
              {renderSelectSearch('Organizatioin Type','organizationType',OrganizationTypes,false,false)}
            </div>
            
            {renderInput("panvat", "PAN / VAT Number","number",false)}
            {renderInput("referralName", "Referral Name","text",false)}
            {renderInput("referralPhone", "Referral Phone","text",false)}         
            </div>
            <div className="mt-6 mb-4">
            {renderSelectSearch('How did you know about us?','how',KnowingUsMethod,false,false)}
            </div>
            <div className="mt-8 mb-4">
              <label className={labelStyle}>Additional Message / Requirements *</label>
              <textarea
                id="message"
                name="message"
                className={inputStyle}
                required
                rows={3}
                value={form.message}
                onChange={handleChange}
                placeholder="Add Message/Note here..."
              ></textarea>
            </div>
            <div className="text-sm text-[#555555] mt-6 gap-4 flex flex-col">
            <div className="flex items-start sm:items-center gap-2">
              <input type="checkbox"  required   className="bg-[#555555] cursor-pointer mt-1.5 sm:mt-0" />{" "}
              <label>
                I confirm that the information provided is accurate and complete to the best of my knowledge.
              </label>
            </div>
            <div className="flex items-start sm:items-center gap-2">
              <input type="checkbox" className="cursor-pointer mt-1.5 sm:mt-0" required  />{" "}
              <label className="">
                I agree to be contacted by your company regarding my quotation request via email or phone.
              </label>
            </div>
          </div>
          <div className="w-full flex justify-center mt-10 mb-16">
            <button
              type="submit"
              className="py-2 cursor-pointer px-10 text-white font-[800] bg-[#383838] rounded-sm hover:bg-[#555]"
            >
              {isSubmitting ? `Submitting${dots}` : "Submit Request"} 
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Quote;
