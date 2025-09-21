"use client";

import Ribbon from "@/components/Ribbon";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  gender: string;
  education: string;
  semesterYear: string;
  college: string;
  semester: string;
  period: string;
  course: string;
  interests: string[];
  type: string;
  interviewSlot: string;
  emergencyContact: string;
  relation: string;
  emergencyPhone: string;
}

export default function InternshipForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    gender: "",
    education: "",
    semesterYear: "",
    college: "",
    semester: "",
    period: "",
    course: "",
    interests: [],
    type: "",
    interviewSlot: "",
    emergencyContact: "",
    relation: "",
    emergencyPhone: "",
  });

  const [focusStates, setFocusStates] = useState<Record<string, boolean>>({});

  const educationOptions = [
    "SEE",
    "Diploma",
    "Bachelor",
    "Masters",
    "M.Phil",
    "Ph. D",
    "Other",
  ];
  const genderOptions = ["Female", "Male"];
  const typeOptions = ["Hybrid", "Remote", "Onsite"];
  const interviewSlots = [
    "Sunday between 1 PM to 7 PM",
    "Tuesday between 1 PM to 7 PM",
    "Thursday between 1 PM to 7 PM",
    "Sunday - Thursday between 9 PM to 11 PM",
  ];
  const interestsOptions = [
    "Php",
    "HTML",
    "Mysql",
    "Bootstrap",
    "Next Js",
    "Laravel",
    "React",
    "Flutter",
    "React Native",
    "Figma",
  ];

  const inputField =
    "w-full mt-1 outline-none bg-[#FFFFFF] shadow-[#CBD0DB2E] shadow-xl p-2 border-[#EAEAEA] border rounded mb-4";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
      const checked = e.target.checked;
      setFormData((prev) => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter((i) => i !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Separate handler for phone inputs because react-phone-input-2 returns string directly
  const handlePhoneChange = (
    value: string,
    name: "phone" | "emergencyPhone"
  ) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Ribbon des="" name="Internship" />
      <section className="p-4 max-w-[1180px] md:px-0 mx-auto">
        <div>
          <h1 className="font-bold text-3xl mb-4">SRIYOG | Internship</h1>
         <div className="text-sm ">
           <p className="font-bold mb-4 text-sm">Hi,</p>
          <p className="text-sm">
            Thank you for your interest in having internship with our company.
            At SRIYOG Consulting, we are committed to providing valuable
            learning experiences for college students across all semesters &#40; 1st
            to 8th&#41;.
            <br />
            <br />
            Our internship program is designed to offer students hands-on
            experience by allowing them to apply their knowledge to real-time
            projects. Through this, interns can enhance their technical and
            professional skills while contributing meaningfully to our work. The
            projects completed during the internship can be highlighted in their
            resumes or CVs, adding significant value to their professional
            profiles. Upon successful completion of the internship, a
            certificate will be provided.
          </p>
<br />
          <p className="font-bold mb-4 text-sm"> 
            &#47;&#47; Terms and Conditions for Internship
            <br className="mt-3"/>
            To be eligible for our internship program, candidates must meet the
            following criteria&#58;
          </p>

          <ul className="list-disc px-6 text-sm">
            <li>
              Must be a college student currently enrolled in any semester &#40; 1st to 8th&#41;.
            </li>
            <li>
              Must submit an official letter in college/ campus letter head from
              their institution approving the internship with our company. [
              Sample ]
            </li>
            <li>
              Must uphold confidentiality and ensure that all company files,
              documents, and source codes remain private and secure.
            </li>
            <li>
              Should demonstrate punctuality, professionalism, and dedication to
              assigned tasks.
            </li>
            <li>
              Must have a strong willingness to learn, grow, and contribute
              effectively to the team.
            </li>
          </ul>
          <br />
          <p className="font-bold text-sm">
            &#47;&#47; We Offer Internship in Following Sectors, Technologies &
            Tools.
          </p>

          <ul className="list-disc px-6 mt-4 text-sm">
            <li>Mobile App Development : React Native/ Flutter</li>
            <li>Mobile App Development : React Native/ Flutter</li>
            <li>Website Designing : HTML / CSS / Bootstra</li>
            <li>UI/UX Designing : Figma / Adobe XD</li>
            <li>Database Management : AirTable</li>
            <li>Digital Marketing : Various Tools</li>
          </ul>
<br />
          <p className="font-bold text-sm">
            &#47;&#47; Selection Process
            <br />
            The selection process consists of three stages:
          </p>

          <ul className="list-disc px-6 mt-4 text-sm">
            <li>
              <span className="font-bold">
                Initial Interview &#40;
Verbal Round&#41;
 &#45; A discussion to assess
                communication skills, motivation, and basic understanding of the
                field.
              </span>
            </li>
            <li>
              <span className="font-bold">Technical Test</span> &#45; text-sm A written or live test to evaluate
              relevant knowledge and problem-solving abilities.
            </li>
            <li>
              <span className="font-bold"> Project Assessment</span> &#45;
 A small project assigned to
              assess practical application skills and work ethic.
            </li>
          </ul>
          <br />
            <p className="text-sm">
              Only candidates who successfully complete all three rounds will be
              selected for the internship and should bring internship only after
              successful completion of all 3 selection processes.
              <br />
              We look forward to welcoming passionate and driven individuals to
              our team. Best of luck to all applicants!
            </p>
<br />
            <p>Note :  This is not a paid opportunity. 
<br />
Time Zone : Coordinated Universal Time &#40;UTC&341; of UTC+05:45 

</p>
<br />
<p className="font-bold text-sm">
            &#35; Goodluck
          </p>
         </div>
        </div>
        <form className="mt-8">
          {/* Top two columns */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Column */}
            <div className="flex-1">
              <h2 className="font-[700] text-xl mb-4">Personal Details</h2>

              <label>First Name</label>
              <input
                name="firstName"
                type="text"
                placeholder={focusStates.firstName ? "" : "Enter first name"}
                value={formData.firstName}
                onChange={handleChange}
                onFocus={() =>
                  setFocusStates({ ...focusStates, firstName: true })
                }
                onBlur={(e) =>
                  setFocusStates({
                    ...focusStates,
                    firstName: e.target.value ? true : false,
                  })
                }
                className={inputField}
              />

              <label>Last Name</label>
              <input
                name="lastName"
                type="text"
                placeholder={focusStates.lastName ? "" : "Enter last name"}
                value={formData.lastName}
                onChange={handleChange}
                onFocus={() =>
                  setFocusStates({ ...focusStates, lastName: true })
                }
                onBlur={(e) =>
                  setFocusStates({
                    ...focusStates,
                    lastName: e.target.value ? true : false,
                  })
                }
                className={inputField}
              />

              <label>Email</label>
              <input
                name="email"
                type="email"
                placeholder={focusStates.email ? "" : "Enter email"}
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusStates({ ...focusStates, email: true })}
                onBlur={(e) =>
                  setFocusStates({
                    ...focusStates,
                    email: e.target.value ? true : false,
                  })
                }
                className={inputField}
              />

              <label>Phone Number</label>
              <PhoneInput
                country="np"
                value={formData.phone}
                onChange={(value) => handlePhoneChange(value, "phone")}
                inputProps={{ name: "phone", required: true, autoFocus: false }}
                inputStyle={{
                  width: "100%",
                  paddingLeft: "48px",
                  fontSize: 16,
                }}
                placeholder="+977 98XXXXXXXX"
                enableSearch
                disableDropdown={false}
                countryCodeEditable={false}
                containerClass="mb-4"
              />

              <label>Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={inputField}
              >
                <option value="">Select Gender</option>
                {genderOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>

              <label>Highest Education</label>
              <select
                name="education"
                value={formData.education}
                onChange={handleChange}
                className={inputField}
              >
                <option value="">Select Highest Education</option>
                {educationOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>

              <label>Current Semester / Passed Year</label>
              <input
                name="semesterYear"
                type="text"
                placeholder={
                  focusStates.semesterYear
                    ? ""
                    : "Enter current semester or passed year"
                }
                value={formData.semesterYear}
                onChange={handleChange}
                onFocus={() =>
                  setFocusStates({ ...focusStates, semesterYear: true })
                }
                onBlur={(e) =>
                  setFocusStates({
                    ...focusStates,
                    semesterYear: e.target.value ? true : false,
                  })
                }
                className={inputField}
              />

              <label>Name of College / Campus</label>
              <input
                name="college"
                type="text"
                placeholder={
                  focusStates.college ? "" : "Enter college or campus name"
                }
                value={formData.college}
                onChange={handleChange}
                onFocus={() =>
                  setFocusStates({ ...focusStates, college: true })
                }
                onBlur={(e) =>
                  setFocusStates({
                    ...focusStates,
                    college: e.target.value ? true : false,
                  })
                }
                className={inputField}
              />
            </div>

            {/* Right Column */}
            <div className="flex-1">
              <h2 className="font-[700] text-xl mb-4">Internship Details</h2>

              <label>Semester</label>
              <input
                name="semester"
                type="text"
                placeholder={focusStates.semester ? "" : "Enter semester"}
                value={formData.semester}
                onChange={handleChange}
                onFocus={() =>
                  setFocusStates({ ...focusStates, semester: true })
                }
                onBlur={(e) =>
                  setFocusStates({
                    ...focusStates,
                    semester: e.target.value ? true : false,
                  })
                }
                className={inputField}
              />

              <label>Internship Period</label>
              <input
                name="period"
                type="text"
                placeholder={
                  focusStates.period ? "" : "Enter internship period"
                }
                value={formData.period}
                onChange={handleChange}
                onFocus={() => setFocusStates({ ...focusStates, period: true })}
                onBlur={(e) =>
                  setFocusStates({
                    ...focusStates,
                    period: e.target.value ? true : false,
                  })
                }
                className={inputField}
              />

              <label>Internship Subject / Course</label>
              <input
                name="course"
                type="text"
                placeholder={
                  focusStates.course ? "" : "Enter internship subject/course"
                }
                value={formData.course}
                onChange={handleChange}
                onFocus={() => setFocusStates({ ...focusStates, course: true })}
                onBlur={(e) =>
                  setFocusStates({
                    ...focusStates,
                    course: e.target.value ? true : false,
                  })
                }
                className={inputField}
              />

              <label>Expertise / Interest</label>
              <div className="flex flex-wrap gap-3 mb-4">
                {interestsOptions.map((opt) => (
                  <label
                    key={opt}
                    className="inline-flex items-center cursor-pointer select-none"
                  >
                    <input
                      type="checkbox"
                      value={opt}
                      checked={formData.interests.includes(opt)}
                      onChange={handleChange}
                      name="interests"
                      className="mr-2"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>

              <label>Internship Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className={inputField}
              >
                <option value="">Select Internship Type</option>
                {typeOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>

              <label>Select Virtual Interview Slot</label>
              <select
                name="interviewSlot"
                value={formData.interviewSlot}
                onChange={handleChange}
                className={inputField}
              >
                <option value="">Select Interview Slot</option>
                {interviewSlots.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>

              <label>Emergency Contact Person</label>
              <input
                name="emergencyContact"
                type="text"
                placeholder={
                  focusStates.emergencyContact
                    ? ""
                    : "Enter emergency contact person"
                }
                value={formData.emergencyContact}
                onChange={handleChange}
                onFocus={() =>
                  setFocusStates({ ...focusStates, emergencyContact: true })
                }
                onBlur={(e) =>
                  setFocusStates({
                    ...focusStates,
                    emergencyContact: e.target.value ? true : false,
                  })
                }
                className={inputField}
              />

              <label>Relation</label>
              <input
                name="relation"
                type="text"
                placeholder={focusStates.relation ? "" : "Enter relation"}
                value={formData.relation}
                onChange={handleChange}
                onFocus={() =>
                  setFocusStates({ ...focusStates, relation: true })
                }
                onBlur={(e) =>
                  setFocusStates({
                    ...focusStates,
                    relation: e.target.value ? true : false,
                  })
                }
                className={inputField}
              />

              <label>Emergency Phone Number</label>
              <PhoneInput
                country="np"
                value={formData.emergencyPhone}
                onChange={(value) => handlePhoneChange(value, "emergencyPhone")}
                inputProps={{
                  name: "emergencyPhone",
                  required: true,
                  autoFocus: false,
                }}
                inputStyle={{
                  width: "100%",
                  paddingLeft: "48px",
                  fontSize: 16,
                }}
                placeholder="+977 98XXXXXXXX"
                enableSearch
                disableDropdown={false}
                countryCodeEditable={false}
                containerClass="mb-4"
              />
            </div>
          </div>

          {/* File Uploads */}
          <div>
            <h2 className="font-[700] text-xl mt-8 mb-4">Uploads</h2>
            <label className="block mb-2">
              Upload CV/Resume:
              <input
                type="file"
                name="cv"
                className="mt-1 block w-full border border-gray-300 rounded p-2"
              />
            </label>

            <label className="block mb-2">
              Upload Cover Letter:
              <input
                type="file"
                name="coverLetter"
                className="mt-1 block w-full border border-gray-300 rounded p-2"
              />
            </label>

            <label className="block mb-4">
              Upload Headshot:
              <input
                type="file"
                name="headshot"
                className="mt-1 block w-full border border-gray-300 rounded p-2"
              />
            </label>
          </div>

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
