'use client'
import Ribbon from "@/components/Ribbon";
import { Console } from "console";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select, { MultiValue } from "react-select";
interface CareerFormData {
  firstName: string;
  lastName: string;
  maritalStatus: string;
  city: string;
  phone: string;
  country: string;
  email: string;
  gender: string;
  university: string;
  college: string;
  interest: string;
  highestEducation: string;
  currentStatus: string;
  topSkills: string[];
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
  cv: string;
  coverletter:string;
  headshot:string;
  citizenship:string;
  academicCertificate:string;
  trainingCertificate: string;
  volunteeringCertificate: string;
  internshipCertificate: string;
}
type SelectOption = {
  label: string;
  value: string;
};
export default function CareerPage() {
  const [careerData, setCareerData] = useState<CareerFormData>({
    firstName: "",
    lastName: "",
    maritalStatus: "",
    city: "",
    phone: "",
    country:"",
    email: "",
    gender: "",
    university: "",
    college: "",
    interest: "",
    highestEducation: "",
    currentStatus: "",
    topSkills: [],
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
    cv: "",
    coverletter:"",
    headshot:"",
    citizenship:"",
    academicCertificate:"",
    trainingCertificate: "",
    volunteeringCertificate: "",
    internshipCertificate: "",
  });

  const selectFields = [
  {
    label: "Top Skills",
    name: "topSkills", // must match CareerFormData key
    options: [
      { label: "PHP", value: "PHP" },
      { label: "MySQL", value: "MySQL" },
      { label: "HTML", value: "HTML" },
      { label: "Bootstrap", value: "Bootstrap" },
      { label: "Next.js", value: "Next.js" },
      { label: "Laravel", value: "Laravel" },
      { label: "React", value: "React" },
      { label: "Flutter", value: "Flutter" },
      { label: "React Native", value: "React Native" },
      { label: "Figma", value: "Figma" },
      { label: "JavaScript", value: "JavaScript" },
      { label: "Vue.js", value: "Vue.js" },
      { label: "Tailwind", value: "Tailwind" },
      { label: "TypeScript", value: "TypeScript" },
      { label: "WordPress", value: "WordPress" },
      { label: "Node.js", value: "Node.js" },
      { label: "MongoDB", value: "MongoDB" },
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
    ],
  },
  ];

  const customStyles = {
    menu: (provided: any) => ({
        ...provided,
        height: "100px", // sets the overall menu height
        overflow: "hidden", // optional: hide extra items if height is fixed
    }),
    menuList: (provided: any) => ({
        ...provided,
        maxHeight: "100px", // scrollable menu list
        overflowY: "auto",
    }),
  };

  const getFileUrl = async (file: File) => {
    console.log("Uploading file...");

    const sigRes = await fetch("/api/cloudinary", { method: "POST" });
    const sigData = await sigRes.json();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("api_key", sigData.apiKey);
    formData.append("timestamp", sigData.timestamp);
    formData.append("signature", sigData.signature);
    formData.append("resource_type", "raw"); // safer for PDFs

    const uploadRes = await fetch(
        `https://api.cloudinary.com/v1_1/${sigData.cloudName}/auto/upload`,
        { method: "POST", body: formData }
    );

    const data = await uploadRes.json();
    console.log("Cloudinary response:", data);

    return `https://res.cloudinary.com/${sigData.cloudName}/raw/upload/fl_inline/${data.public_id}.${data.format}`;
  };



  const inputStyle =
  "w-full mt-1 outline-none bg-white shadow-[#CBD0DB2E] shadow-xl p-2 border-[#EAEAEA] border rounded mb-4";
  const fileinputStyle = "w-full file:bg-[#383838] py-2.5 file:text-white file:mr-3 file:hover:bg-[#383100] file:active:bg-[#606060] file:px-2 file:rounded-md file:cursor-pointer pointer-events-auto mt-1 outline-none bg-white shadow-[#CBD0DB2E] shadow-xl p-2 border-[#EAEAEA] border rounded mb-1";
  const labelStyle = "text-sm font-medium";

  const [focusStates, setFocusStates] = useState<Record<string, boolean>>({});

  const renderInput = (name:string,label:string,type:string,mandatory:boolean) =>(
    <div>
        <label>{label}</label>
        <input
          name={name}
          type={type}
          required={mandatory}
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
          className={inputStyle}
        />
    </div>
  )

  const renderSelect = (label:string,name:string,options:string[])=>(
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
  )

  const renderSelectSearch = <K extends keyof CareerFormData>(label:string,name:K,options: SelectOption[])=>(
    <div key={label} className="mb-4">
        <label className="block mb-1">{label}</label>
        <Select
           isMulti
           instanceId={name}
           options={options}
           required
           value={options.filter(opt => (careerData[name] as string[]).includes(opt.value))}
           styles={customStyles}
           onChange={(selected) =>
                setCareerData(prev => ({
                ...prev,
                [name]: (selected as SelectOption[]).map(opt => opt.value),
             }))
           }
        />
    </div>
  )

  const renderFile = (label:string,name: keyof CareerFormData)=>(
    <div key={label} className="mb-4">
      <label className="block mb-1">{label}</label>
      <input
        type="file"
        className={fileinputStyle}
        onChange={(e) => handleFileChange(e, name)}
      />
    </div>
  )

  const renderphoneInput = (name: keyof CareerFormData,label:string)=>(
    <div className="block mt-1">
      <label  className={`${labelStyle} block mb-1`}>
        {label}
      </label>
      <PhoneInput
        country={"np"}
        value={careerData[name] as string ?? ""}
        onChange={(phone) => setCareerData({...careerData,[name]: phone})}
        inputProps={{
          name: "phone",
          required: true,
          autoFocus: false,
        }}
        inputStyle={{
          width: "100%",
          height: "40px",
          paddingLeft: "48px",
          fontSize: "16px",
          borderBlockColor: "#e1e1e1"
        }}
        placeholder="+977 98XXXXXXXX"
        enableSearch
        disableDropdown={false}
        countryCodeEditable={false}
      />
    </div>
  )

  const inputField =
    "w-full mt-1 outline-none bg-white shadow-[#CBD0DB2E] shadow-xl p-2 border border-[#EAEAEA] rounded mb-4";

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>, name: keyof CareerFormData) => {
    if (e.target.files?.[0]) {
        const fileUrl = await getFileUrl(e.target.files[0]);
        setCareerData(prev => ({ ...prev, [name]: fileUrl }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCareerData((prev) => ({ ...prev, [name as keyof CareerFormData]: value }));
  };

  const handleSubmit = (e:React.FormEvent)=>{
    e.preventDefault();
    console.log(careerData)
  }
  return (
    <>
      <Ribbon name="Career" des="" />
      <section className="max-w-[1180px] mx-auto px-6 md:px-6 lg:px-6 xl:px-0">
        <h1 className="text-3xl font-[900]">SRIYOG | Career</h1>
        <p className="text-sm mt-4">Shaping Robots</p>

        <form onSubmit={handleSubmit} className="mt-8">
          {/* <div>
            <label>Career Objective / Professional Summary</label>
            <textarea
              name="careerObjective"
              value={careerData.careerObjective}
              onChange={handleChange}
              className={`${inputField} h-24`}
              placeholder="Describe your career goal or objective"
            />
          </div> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* {renderInput("firstName", "First Name","text",true)}
              {renderInput("lastName", "Last Name","text",true)}
              {renderInput("maritalStatus", "Marital Status","text",true)}
              {renderInput("city", "City","text",true)}
              {renderphoneInput("phone", "Phone")}
              {renderInput("country","Country","text",true)}
              {renderInput("fatherName","Father's Name","text",true)}
              {renderphoneInput("fatherPhone", "Father's Phone Number")}      
              {renderInput("email", "Email","email",true)}
              {renderInput("university", "Name of University","text",true)}
              {renderInput("college", "Name of College / Campus","text",true)}
              {renderInput("interest", "Interested In","text",true)}
              {renderInput("highestEducation", "Highest Education","text",true)} */}
              {renderInput("currentStatus", "Current Semester / Passed Year","text",true)}

              {/* Top skills */}
              {selectFields.map(field =>
                renderSelectSearch(field.label, field.name as keyof CareerFormData, field.options)
              )}


              {/* SELECT DROPDOWNS */}
              {[
                // {
                //   label: "Gender",
                //   name: "gender",
                //   options: [
                //     "Male",
                //     "Female"
                //   ]
                // },
                // {
                //   label: "Current Employment Status",
                //   name: "employmentStatus",
                //   options: [
                //     "Looking for Better Opportunity",
                //     "Unemployed",
                //     "Employed",
                //     "Self Employed",
                //   ],
                // },
                // {
                //   label: "Employment Type",
                //   name: "employmentType",
                //   options: ["Contract", "Full Time", "Part Time", "Internship"],
                // },
                // {
                //   label: "Expected Monthly Salary",
                //   name: "expectedSalary",
                //   options: ["On Contract Basis", "Below 15,000", "15,000 - 25,000", "Above 25,000"],
                // },
                // {
                //   label: "Duty Hours",
                //   name: "dutyHours",
                //   options: ["Flexible", "Morning Shift", "Evening Shift", "Night Shift"],
                // },
                // {
                //   label: "Do you have driving license?",
                //   name: "hasLicense",
                //   options: ["Yes", "No"],
                // },
                {
                  label: "Do you have personal vehicle?",
                  name: "hasVehicle",
                  options: ["Yes", "No"],
                },
              ].map(({ label, name, options }) =>
                    renderSelect(label, name, options)
                )}

              {/* Additional Inputs */}
              {[
                // { label: "Tech Skills", name: "techSkills" },
                // { label: "Soft Skills", name: "softSkills" },
                 { label: "Work Experience 1", name: "workExperience1", type: "textarea" },
                // { label: "Work Experience 2", name: "workExperience2", type: "textarea" },                          
                // { label: "Hobbies", name: "hobbies" },
                // { label: "Languages Known", name: "languages" },
                // { label: "GitHub URL", name: "github" },
                // { label: "Project / Personal / Portfolio URL", name: "portfolio" },
                // { label: "Reference 1", name: "reference1" },
                // { label: "Reference 2", name: "reference2" },
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

            <h2 className="font-bold text-lg mt-6 col-span-2 mb-8 border-b pb-1 border-[#383838]">Uploads</h2>
            {[
            { label: "Upload CV/Resume", name: "cv" },
            { label: "Upload Handwritten Cover Letter", name: "coverletter" },
            { label: "Headshot", name: "headshot" },
            { label: "Citizenship", name: "citizenship" },
            { label: "Academic Certificate", name: "academicCertificate" },
            { label: "Training Certificate", name: "trainingCertificate" },
            { label: "Volunteering Certificate", name: "volunteeringCertificate" },
            { label: "Internship Certificate", name: "internshipCertificate" },
            ].map(({ label, name }) => 
                renderFile(label, name as keyof CareerFormData))}

          {/* SUBMIT */}
          <div className="w-full flex justify-center mt-10 mb-16">
            <button
              type="submit"
              className="py-2 px-10 cursor-pointer text-white font-[800] bg-[#383838] rounded-sm hover:bg-[#555]"
            >
              Submit Application
            </button>
          </div>
        </form>
      </section>
    </>
  );
}