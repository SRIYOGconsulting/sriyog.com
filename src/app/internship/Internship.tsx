"use client";

import Ribbon from "@/components/Ribbon";
import { countries } from "@/src/data/countries";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select, { SingleValue } from "react-select";

type Option = {
  label:string,
  value:string
}
interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  country : string;
  gender: string;
  education: string;
  semesterYear: string;
  university: string;
  college:string;
  period: string;
  course: string;
  interests: Option[];
  type: string;
  internshipSlot: string;
  emergencyContact: string;
  relation: string;
  emergencyPhone: string;
  cv:File | null,
  headshot:File | null,
  coverletter:File | null,
  citizenship: File[],
}
const fileinputStyle = "w-full file:bg-[#383838] py-2.5 file:text-white file:mr-3 file:hover:bg-[#383100] file:active:bg-[#606060] file:px-2 file:rounded-md file:cursor-pointer pointer-events-auto mt-1 outline-none bg-white shadow-[#CBD0DB2E] shadow-xl p-2 border-[#EAEAEA] border rounded mb-1";

export default function InternshipForm() {
  const [isSubmitting,setIsSubmitting] = useState<boolean>(false);
  const [isLoading,setIsLoading] = useState<boolean>(false);
  const [submitted,setSubmitted] = useState<boolean>(false);
  const [dots, setDots] = useState("");
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    country : "",
    email: "",
    gender: "",
    education: "",
    semesterYear: "",
    university: "",
    college:"",
    period: "",
    course: "",
    interests: [],
    type: "",
    internshipSlot: "",
    emergencyContact: "",
    relation: "",
    emergencyPhone: "",
    cv:null,
    headshot:null,
    coverletter: null,
    citizenship: [],
  });

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

const getFileUrl = async (file: File) => {
    console.log("Uploading file...");  
    try{
      setIsLoading(true)
      const sigRes = await fetch("/api/cloudinary", { method: "POST" });
      const sigData = await sigRes.json();

      const formData = new FormData();
      formData.append("file", file);
      formData.append("api_key", sigData.apiKey);
      formData.append("timestamp", sigData.timestamp);
      formData.append("signature", sigData.signature);

      const uploadRes = await fetch(
        `https://api.cloudinary.com/v1_1/${sigData.cloudName}/auto/upload`,
        { method: "POST", body: formData }
      );

      const data = await uploadRes.json();
      const downloadUrl = data.secure_url
      console.log(downloadUrl);
      return downloadUrl;
    }catch(error){
      console.error(error)
    }finally{
      setIsLoading(false)
    }
  }

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
  
  const InterestedIn = [
    "Part Time Work",
    "Full Time Job",
    "Project Based Work",
    "Internship",
    "Training",
    "Career Growth",
    "Others"
  ]

  const genderOptions = ["Female", "Male"];
  const typeOptions = ["Hybrid", "Remote", "Onsite"];

  const Period = [
    "2 Months","3 Months","6 Months"
  ]
    const selectSkills = [
      { label: "PHP", value: "Php" },
      { label: "MySQL", value: "MySql" },
      { label: "HTML", value: "HTML" },
      { label: "Bootstrap", value: "Bootstrap" },
      { label: "Next.js", value: "Next Js" },
      { label: "Laravel", value: "Laravel" },
      { label: "React", value: "React" },
      { label: "Flutter", value: "Flutter" },
      { label: "React Native", value: "React Native" },
      { label: "Figma", value: "Figma" },
      { label: "JavaScript", value: "Javascript" },
      { label: "Vue.js", value: "Vue Js" },
      { label: "Tailwind", value: "Tailwind" },
      { label: "TypeScript", value: "Typescript" },
      { label: "WordPress", value: "WordPress" },
      { label: "Node.js", value: "Node Js" },
      { label: "MongoDB", value: "Mongo DB" },
      { label: "Express", value: "Express" },
      { label: "Photoshop", value: "Photoshop" },
      { label: "Canva", value: "Canva" },
      { label: "Java", value: "Java" },
      { label: "Python", value: "Python" },
      { label: "Django", value: "Django" },
      { label: "Java Spring Boot", value: "Java Spring Boot" },
      { label: "Angular", value: "Angular" },
      { label: "CSS", value: "CSS" },
      { label: "Scala", value: "Scala" },
      { label: "PostgreSQL", value: "PostgreSQL" },
      { label: "SEO", value: "SEO" },
      { label: "Photography", value: "Photography" },
  ]

  const inputField =
    "w-full mt-1 outline-none bg-[#FFFFFF] shadow-[#CBD0DB2E] shadow-xl p-2 border-[#EAEAEA] border rounded mb-4";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({...formData,[name] : value});
  };

  // Separate handler for phone inputs because react-phone-input-2 returns string directly
  const handlePhoneChange = (
    value: string,
    name: "phone" | "emergencyPhone"
  ) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
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
  
  const handleSubmit = async(e:React.FormEvent)=>{
    e.preventDefault();
    console.log(formData)
    setIsSubmitting(true);
    try {
        const res = await fetch("/api/internship-form", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
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
  }

  return (
    <>
      <Ribbon des="" name="Internship" />
        {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="flex items-center justify-center">
            <div
              className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-400 border-t-transparent"
            ></div>
          </div>
        </div>
        )}
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
      <section className="p-4 max-w-[1180px] md:px-0 mx-auto">
        <div>
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
            <li>Website Designing : React Js / Next Js / MERN Stack</li>
            <li>UI/UX Designing : Figma</li>
            <li>Data Management : AirTable / MongoD / Supabase</li>
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
              <span className="font-bold">Technical Test</span> &#45;  A written or live test to evaluate
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
Time Zone : Coordinated Universal Time (UTC) of UTC+03:00 ( <a className="border-b border-black" href="http://www.time.is/gmt+3" target="_blank">www.time.is/gmt+3</a> )
</p>
<br />
<p className="font-bold text-sm">
            &#35; Goodluck
          </p>
         </div>
        </div>
        <form className="mt-8" onSubmit={handleSubmit}>
          {/* Top two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label>First Name</label>
              <input
                required
                name="firstName"
                type="text"
                placeholder={focusStates.firstName ? "" : "Enter first name"}
                value={formData.firstName}
                onChange={handleChange}
                onFocus={() => setFocusStates({ ...focusStates, firstName: true })}
                onBlur={(e) =>
                  setFocusStates({
                    ...focusStates,
                    firstName: !!e.target.value,
                  })
                }
                className={inputField}
              />
            </div>

            <div>
              <label>Last Name</label>
              <input
                required
                name="lastName"
                type="text"
                placeholder={focusStates.lastName ? "" : "Enter last name"}
                value={formData.lastName}
                onChange={handleChange}
                onFocus={() => setFocusStates({ ...focusStates, lastName: true })}
                onBlur={(e) =>
                  setFocusStates({
                    ...focusStates,
                    lastName: !!e.target.value,
                  })
                }
                className={inputField}
              />
            </div>
            <div>
              <label className="block mb-1.5">Country</label>
              <Select<Option, false>
                instanceId="country"
                options={countries}
                required
                styles={customStyles}
                value={
                  countries.find(
                    (c) => c.value === formData.country
                  ) ?? null
                }
                onChange={(option) =>
                  setFormData({
                    ...formData,
                    country: option?.value ?? ""
                  })
                }
              />
            </div>
            <div>
              <label>Email</label>
              <input
                required
                name="email"
                type="email"
                placeholder={focusStates.email ? "" : "Enter email"}
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusStates({ ...focusStates, email: true })}
                onBlur={(e) =>
                  setFocusStates({
                    ...focusStates,
                    email: !!e.target.value,
                  })
                }
                className={inputField}
              />
            </div>

            <div>
              <label className="block mb-1">Phone Number</label>
              <PhoneInput
                country="np"
                value={formData.phone}
                onChange={(value) => handlePhoneChange(value, "phone")}
                inputProps={{ name: "phone", required: true }}
                inputStyle={{ width: "100%", paddingLeft: "48px", fontSize: 16,height:"40px" }}
                placeholder="+977 98XXXXXXXX"
                enableSearch
                countryCodeEditable={false}
                containerClass="mb-4"
              />
            </div>

            <div>
              <label>Gender</label>
              <select
                required
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={inputField}
              >
                <option value="">Select Gender</option>
                {genderOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label>Highest Education</label>
              <select
              required
                name="education"
                value={formData.education}
                onChange={handleChange}
                className={inputField}
              >
                <option value="">Select Highest Education</option>
                {educationOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label>Current Semester / Passed Year</label>
              <input
                required
                name="semesterYear"
                type="text"
                placeholder={focusStates.semesterYear ? "" : "Enter current semester or passed year"}
                value={formData.semesterYear}
                onChange={handleChange}
                className={inputField}
              />
            </div>

            <div>
              <label>Name of University</label>
              <input
                required
                name="university"
                type="text"
                placeholder={focusStates.university ? "" : "Enter university name"}
                value={formData.university}
                onChange={handleChange}
                className={inputField}
              />
            </div>
            
            <div>
              <label>Name of College / Campus</label>
              <input
                required
                name="college"
                type="text"
                placeholder={focusStates.college ? "" : "Enter college / campus name"}
                value={formData.college}
                onChange={handleChange}
                className={inputField}
              />
            </div>

            <div>
              <label>Internship Period</label>
              <select
                required
                name="period"
                value={formData.period}
                onChange={handleChange}
                className={inputField}
              >
                <option value="">Select Period</option>
                {Period.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label>Internship Subject / Course</label>
              <select name="course" className={inputField} required onChange={handleChange} value={formData.course} >
                <option value="">Select Subject</option>
                <option value="Web Development">Web Development</option>
                <option value="App Developement">App Developement</option>
                <option value="MERN Stack">MERN Stack</option>
                <option value="Fullstack Development">Fullstack Development</option>
                <option value="Social Media Management">Social Media Management</option>
                <option value="Data Science">Data Science</option>
                <option value="Quality Assurance">Quality Assurance</option>
                <option value="Content Writing">Content Writing</option>    
                <option value="Other">Other</option>            
              </select>
            </div>


            <div>
              <label>Internship Type</label>
              <select
                required
                name="type"
                value={formData.type}
                onChange={handleChange}
                className={inputField}
              >
                <option value="">Select Internship Type</option>
                {typeOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label>Select Virtual Internship Slot</label>
              <select
                required
                name="internshipSlot"
                value={formData.internshipSlot}
                onChange={handleChange}
                className={inputField}
              >
                <option value="">Select Interview Slot</option>
                <option value="Morning  8:00 AM – 11:00 AM (GMT+3)">Sunday - Friday 8:15 AM to 10:15 AM (GMT+3)</option>
                <option value="Afternoon  12:00 PM – 3:00 PM (GMT+3)">Sunday - Friday 12:15 PM to 3:15 PM (GMT+3)</option>
                <option value="Evening  4:00 PM – 7:00 PM (GMT+3)">Sunday - Friday 4:15 PM to 7:15 PM (GMT+3)</option>
              </select>
            </div>
            <div className="">
              <label className="mb-1 block">Expertise / Interest</label>
              <Select
                  required
                  isMulti
                  instanceId="skills"
                  options={selectSkills}
                  value={formData.interests}
                  styles={customStyles}
                  onChange={(selected) =>
                      setFormData({ ...formData, interests: selected as Option[] })
                  }
              />
            </div>

            <div>
              <label>Emergency Contact Person</label>
              <input
                required
                name="emergencyContact"
                placeholder="Enter emergency contact person"
                type="text"
                value={formData.emergencyContact}
                onChange={handleChange}
                className={inputField}
              />
            </div>

            <div>
              <label className="block mb-1">Emergency Phone Number</label>
              <PhoneInput
                country="np"
                value={formData.emergencyPhone}
                onChange={(value) => handlePhoneChange(value, "emergencyPhone")}
                inputProps={{ name: "emergencyPhone", required: true }}
                inputStyle={{ width: "100%", paddingLeft: "48px", fontSize: 16,height:"40px" }}
                placeholder="+977 98XXXXXXXX"
                enableSearch
                countryCodeEditable={false}
                containerClass="mb-4"
              />
            </div>
            <div>
              <label className="">Relation</label>
              <select
                required
                name="relation"
                value={formData.relation}
                onChange={handleChange}
                className={inputField}
              >
                <option value="">Select Relation</option>
                <option value="Father">Father</option>
                <option value="Mother">Mother</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>              

          {/* File Uploads */}
          <div>
            <h2 className="font-[700] text-xl mt-8 mb-6 border-b border-black pb-1 w-fit">Uploads</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="block mb-2">
                Upload CV / Resume:
                <input
                  required
                  type="file"
                  name="cv"
                  accept=".pdf"
                  className={`${fileinputStyle} mb-4`}
                  onChange={async(e)=>{
                    const file = e.target.files?.[0]
                    if(!file)return;
                    setFormData({...formData,cv: await getFileUrl(file)})}}
                />
              </label>

              <label className="block mb-2">
                Upload Handwritten Cover Letter:
                <input
                  required
                  type="file"
                  name="coverLetter"
                  accept=".pdf"
                  className={`${fileinputStyle} mb-4`}
                  onChange={async(e)=>{
                    const file = e.target.files?.[0]
                    if(!file)return;
                    setFormData({...formData,coverletter: await getFileUrl(file)})}}
                />
              </label>

              <label className="block mb-4">
                Upload Current Headshot:
                <input
                  required
                  type="file"
                  accept=".jpg,.jpeg"
                  name="headshot"
                  className={`${fileinputStyle}`}
                  onChange={async(e)=>{
                    const file = e.target.files?.[0]
                    if(!file)return;
                    setFormData({...formData,headshot: await getFileUrl(file)})}}
                />
              </label>

              <label className="block mb-4">
                Upload Citizenship / Government ID:
                <input
                  required
                  type="file"
                  multiple
                  accept=".jpg,.jpeg,.png,.pdf"
                  name="citizenship"
                  className={`${fileinputStyle}`}
                  onChange={async (e) => {
                    const files = Array.from(e.target.files ?? []);
                    const urls = await Promise.all(
                      files.map(file => getFileUrl(file))
                    );

                    setFormData({ ...formData, citizenship: urls });
                  }}
                />
              </label>
            </div>
          </div>
          <div className="space-y-2 mt-2">
            <div className="flex items-start sm:items-center gap-2">
              <input type="checkbox"  required   className="bg-[#555555] cursor-pointer mt-1.5 sm:mt-0" />{" "}
              <label className="text-sm">
                I confirm that the information provided in this internship application is true, accurate, and complete to the best of my knowledge.
              </label>
            </div>
            <div className="flex items-start sm:items-center gap-2">
              <input type="checkbox" className="cursor-pointer mt-1.5 sm:mt-0" required  />{" "}
              <label className="text-sm">
                I understand that this internship is an unpaid opportunity and agree to comply with the company’s rules, policies, and confidentiality requirements.
              </label>
            </div>
          </div>
          <div className="w-full flex justify-center mt-10 mb-16">
            <button
              type="submit"
              className="py-2 px-10 cursor-pointer text-white font-[800] bg-[#383838] rounded-sm hover:bg-[#555]"
            >
              {isSubmitting ? `Submitting${dots}` : "Submit Application"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
