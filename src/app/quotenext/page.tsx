"use client";

import { useState } from "react";
import Ribbon from "@/components/Ribbon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inputStyle =
  "w-full mt-1 outline-none bg-white shadow-[#CBD0DB2E] shadow-xl p-2 border-[#EAEAEA] border rounded mb-4";

const labelStyle = "text-sm font-medium";

const Page = () => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    contact: "",
    phonenumber: "",
    email: "",
    whatsapp: "",
    service: "",
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
    industry: "",
    panvat: "",
    referralName: "",
    referralPhone: "",
    how: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const services = [
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
    "Others",
  ];

  const businessStatuses = [
    "Yes",
    "Above Breakeven Point",
    "Meeting Breakeven Point",
    "No",
    "Bleeding Phase",
    "Other",
  ];

  const budgets = [
    "Above NPR 15,000",
    "Above NPR 25,000",
    "Above NPR 50,000",
    "Below NPR 100,000",
    "Above NPR 100,000",
  ];

  const registrationTypes = [
    "Nagarpalika",
    "Gharelu",
    "Office of The Company Registrar (Pvt. Ltd)",
    "Social Welfare Council",
    "CDO Office",
    "INGO",
    "Social Organization",
    "Union/ Club/ Community Based Organization",
    "Others",
  ];

  const sanitizeDate = (value: string) => {
    const date = new Date(value);
    return isNaN(date.getTime()) ? undefined : date.toISOString().split("T")[0];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate PAN / VAT Number as number or empty
    const panVatValue = form.panvat.trim();
    const panVatNumber = Number(panVatValue);

    if (panVatValue !== "" && isNaN(panVatNumber)) {
      toast.error("PAN / VAT Number must be a valid number");
      return;
    }

    const airtableData = {
      records: [
        {
          fields: {
            "Name": form.contact,
            "Name of Organisation": form.name,
            "Address": form.address,
            "Phone Number": form.phonenumber,
            "Email": form.email,
            "WhatsApp Number": form.whatsapp,
            "Select a Service": [form.service],
            "Project Budget in NPR": form.budget,
            "Competitor 1 ": form.competitor,
            "Reference Website link ( URL )": form.reference,
            "Project Start Date": sanitizeDate(form.startDate),
            "Project Ending Date": sanitizeDate(form.endDate),
            "Scope of Work ": form.scope,
            "Preferred Technology Stack or Software Platforms ": form.technology,
            "Is your business on Profit?": form.business,
            "What's your monthly IT Budget ?": form.monthlyBudget,
            "Name of your existing IT Vendor": form.vendor,
            "Organisation Registration Type": form.registration,
            "Industry Type": form.industry,
            "Organisation PAN/ VAT Number": panVatNumber,
            "Referral Name": form.referralName,
            "Referral Phone": form.referralPhone,
            "How did you know about us?": form.how,
            "Message": form.message,
            "Country": "Nepal",
          },
        },
      ],
    };

    try {
      const res = await fetch(
        "https://api.airtable.com/v0/app30hmkatmLiojps/Request-a-Quotation",
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer pat30hTRCJ83wIxWg.4c324b6fd7f92e0afd2aef8315cb147759cef9be32cd97a5b430c7b7ac77cb18",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(airtableData),
        }
      );

      const data = await res.json();
      if (res.ok) {
        toast.success("Your quotation request was submitted successfully!");
        setForm({
          name: "",
          address: "",
          contact: "",
          phonenumber: "",
          email: "",
          whatsapp: "",
          service: "",
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
          industry: "",
          panvat: "",
          referralName: "",
          referralPhone: "",
          how: "",
          message: "",
        });
      } else {
        console.error("Airtable error:", data);
        toast.error("Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error("Request failed:", err);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const renderInput = (
    id: keyof typeof form,
    label: string,
    type: "text" | "email" | "date" = "text"
  ) => (
    <div key={id}>
      <label htmlFor={id} className={labelStyle}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={form[id]}
        onChange={handleChange}
        placeholder={`Enter ${label.toLowerCase()}`}
        className={inputStyle}
      />
    </div>
  );

  const renderSelect = (
    id: keyof typeof form,
    label: string,
    options: string[]
  ) => (
    <div key={id}>
      <label htmlFor={id} className={labelStyle}>
        {label}
      </label>
      <select
        id={id}
        value={form[id]}
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

  return (
    <>
      <Ribbon name="Quote" des="" />
      <section className="max-w-[1180px] mx-auto p-4 md:px-0">
        <h1 className="text-3xl font-bold mb-4">IT Service Quotation</h1>
        <p className="text-sm mb-2">
          We prioritize understanding your unique requirements, delivering personalized solutions
          that align with your goals, and maintaining high levels of security to protect your data.
        </p>
        <p className="text-sm mb-2">
          Whether you’re a startup, an established business, or a government entity, our focus on
          excellence and customer satisfaction makes us the IT partner you can trust.
        </p>
        <p className="text-sm mb-6">
          Please fill your requirements so that we can provide you the best proposal & pricing.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {renderInput("name", "Name of Organization")}
            {renderInput("address", "Address / City")}
            {renderInput("contact", "Contact Person")}
            {renderInput("phonenumber", "Phone Number")}
            {renderInput("email", "Email", "email")}
            {renderInput("whatsapp", "WhatsApp Number")}
            {renderSelect("service", "Select a Service", services)}
            {renderSelect("budget", "Project Budget (NPR)", budgets)}
            {renderInput("competitor", "Competitor Name")}
            {renderInput("reference", "Reference Website URL")}
            {renderInput("startDate", "Project Start Date", "date")}
            {renderInput("endDate", "Project End Date", "date")}
            {renderInput("scope", "Scope of Work")}
            {renderInput("technology", "Preferred Tech Stack")}
            {renderSelect("business", "Is your business profitable?", businessStatuses)}
            {renderInput("monthlyBudget", "Monthly IT Budget")}
            {renderInput("vendor", "Existing IT Vendor")}
            {renderSelect("registration", "Registration Type", registrationTypes)}
            {renderInput("industry", "Industry Type")}
            {renderInput("panvat", "PAN / VAT Number")}
            {renderInput("referralName", "Referral Name")}
            {renderInput("referralPhone", "Referral Phone")}
            {renderInput("how", "How did you know about us?")}
            {renderInput("message", "Additional Message / Requirements")}
          </div>

          <div className="w-full flex justify-center mt-10 mb-16">
            <button
              type="submit"
              className="py-2 px-10 text-white font-[800] bg-[#383838] rounded-sm hover:bg-[#555]"
            >
              Submit Request
            </button>
          </div>
        </form>
      </section>
      <ToastContainer position="top-center" />
    </>
  );
};

export default Page;
