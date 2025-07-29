"use client";

import Ribbon from "@/components/Ribbon";
import { useState } from "react";

interface CareerFormData {
  firstName: string;
  lastName: string;
  maritalStatus: string;
  city: string;
  phone: string;
  email: string;
  gender: string;
  university: string;
  college: string;
  interest: string;
  highestEducation: string;
  currentStatus: string;
  topSkills: string;
  employmentStatus: string;
  employmentType: string;
  expectedSalary: string;
  dutyHours: string;
  hasLicense: string;
  hasVehicle: string;
  techSkills: string;
  softSkills: string;
  workExperience1: string;
  workExperience2: string;
  fatherName: string;
  fatherPhone: string;
  hobbies: string;
  languages: string;
  github: string;
  portfolio: string;
  reference1: string;
  reference2: string;
  careerObjective: string;
}

export default function CareerPage() {
  const [careerData, setCareerData] = useState<CareerFormData>({
    firstName: "",
    lastName: "",
    maritalStatus: "",
    city: "",
    phone: "",
    email: "",
    gender: "",
    university: "",
    college: "",
    interest: "",
    highestEducation: "",
    currentStatus: "",
    topSkills: "",
    employmentStatus: "",
    employmentType: "",
    expectedSalary: "",
    dutyHours: "",
    hasLicense: "",
    hasVehicle: "",
    techSkills: "",
    softSkills: "",
    workExperience1: "",
    workExperience2: "",
    fatherName: "",
    fatherPhone: "",
    hobbies: "",
    languages: "",
    github: "",
    portfolio: "",
    reference1: "",
    reference2: "",
    careerObjective: "",
  });

  const [focusStates, setFocusStates] = useState<Record<string, boolean>>({});

  const inputField =
    "w-full mt-1 outline-none bg-white shadow-[#CBD0DB2E] shadow-xl p-2 border border-[#EAEAEA] rounded mb-4";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCareerData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Ribbon name="Career" des="" />
      <section className="max-w-[1180px] mx-auto px-6 md:px-0">
        <h1 className="text-3xl font-[900]">SRIYOG | Career</h1>
        <p className="text-sm mt-4">Shaping Robots</p>

        <form className="mt-8">
          <div>
            <label>Career Objective / Professional Summary</label>
            <textarea
              name="careerObjective"
              value={careerData.careerObjective}
              onChange={handleChange}
              className={`${inputField} h-24`}
              placeholder="Describe your career goal or objective"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* LEFT COLUMN */}
            <div className="flex-1">
              {[
                { label: "First Name", name: "firstName" },
                { label: "Last Name", name: "lastName" },
                { label: "Marital Status", name: "maritalStatus" },
                { label: "City", name: "city" },
                { label: "Phone", name: "phone" },
                { label: "Email", name: "email" },
                { label: "Gender", name: "gender" },
                { label: "Name of University", name: "university" },
                { label: "Name of College / Campus", name: "college" },
                { label: "Interested in", name: "interest" },
                { label: "Highest Education", name: "highestEducation" },
                { label: "Current Semester / Passed Year", name: "currentStatus" },
                { label: "Top 5 Skills", name: "topSkills" },
              ].map(({ label, name }) => (
                <div key={name}>
                  <label>{label}</label>
                  <input
                    name={name}
                    type="text"
                    value={careerData[name as keyof CareerFormData]}
                    onChange={handleChange}
                    placeholder={focusStates[name] ? "" : `Enter ${label.toLowerCase()}`}
                    onFocus={() => setFocusStates({ ...focusStates, [name]: true })}
                    onBlur={(e) =>
                      setFocusStates({
                        ...focusStates,
                        [name]: e.target.value ? true : false,
                      })
                    }
                    className={inputField}
                  />
                </div>
              ))}
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex-1">
              {/* SELECT DROPDOWNS */}
              {[
                {
                  label: "Current Employment Status",
                  name: "employmentStatus",
                  options: [
                    "Looking for Better Opportunity",
                    "Unemployed",
                    "Employed",
                    "Self Employed",
                  ],
                },
                {
                  label: "Employment Type",
                  name: "employmentType",
                  options: ["Contract", "Full Time", "Part Time", "Internship"],
                },
                {
                  label: "Expected Monthly Salary",
                  name: "expectedSalary",
                  options: ["On Contract Basis", "Below 15,000", "15,000 - 25,000", "Above 25,000"],
                },
                {
                  label: "Duty Hours",
                  name: "dutyHours",
                  options: ["Flexible", "Morning Shift", "Evening Shift", "Night Shift"],
                },
                {
                  label: "Do you have driving license?",
                  name: "hasLicense",
                  options: ["Yes", "No"],
                },
                {
                  label: "Do you have personal vehicle?",
                  name: "hasVehicle",
                  options: ["Yes", "No"],
                },
              ].map(({ label, name, options }) => (
                <div key={name}>
                  <label>{label}</label>
                  <select
                    name={name}
                    value={careerData[name as keyof CareerFormData]}
                    onChange={handleChange}
                    className={inputField}
                  >
                    <option value="">Select Option</option>
                    {options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              ))}

              {/* Additional Inputs */}
              {[
                { label: "Tech Skills", name: "techSkills" },
                { label: "Soft Skills", name: "softSkills" },
                { label: "Work Experience 1", name: "workExperience1", type: "textarea" },
                { label: "Work Experience 2", name: "workExperience2", type: "textarea" },
                { label: "Father's Name", name: "fatherName" },
                { label: "Phone Number", name: "fatherPhone" },
                { label: "Hobbies", name: "hobbies" },
                { label: "Languages Known", name: "languages" },
                { label: "GitHub URL", name: "github" },
                { label: "Project / Personal / Portfolio URL", name: "portfolio" },
                { label: "Reference 1", name: "reference1" },
                { label: "Reference 2", name: "reference2" },
              ].map(({ label, name, type }) => (
                <div key={name}>
                  <label>{label}</label>
                  {type === "textarea" ? (
                    <textarea
                      name={name}
                      value={careerData[name as keyof CareerFormData]}
                      onChange={handleChange}
                      className={`${inputField} h-24`}
                      placeholder={`Enter ${label.toLowerCase()}`}
                    />
                  ) : (
                    <input
                      name={name}
                      type="text"
                      value={careerData[name as keyof CareerFormData]}
                      onChange={handleChange}
                      placeholder={`Enter ${label.toLowerCase()}`}
                      className={inputField}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* FILE UPLOAD SECTION */}
          <div className="mt-10">
            <h2 className="font-bold text-lg mb-4">Uploads</h2>
            {[
              "Upload CV/Resume",
              "Upload Handwritten Cover Letter",
              "Headshot",
              "Citizenship",
              "Academic Certificate",
              "Training Certificate",
              "Volunteering Certificate",
              "Internship Certificate",
            ].map((label) => (
              <div key={label} className="mb-4">
                <label className="block mb-1">{label}</label>
                <input
                  type="file"
                  className="w-full cursor-pointer rounded border border-dashed border-gray-400 bg-white p-4 text-gray-600"
                />
              </div>
            ))}
          </div>

          {/* SUBMIT */}
          <div className="w-full flex justify-center mt-10 mb-16">
            <button
              type="submit"
              className="py-2 px-10 text-white font-[800] bg-[#383838] rounded-sm hover:bg-[#555]"
            >
              Submit Application
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
