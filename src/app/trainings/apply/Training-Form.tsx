"use client";

import { countries } from "@/src/data/countries";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select, { MultiValue, SingleValue } from "react-select";

interface FormType {
  firstname: string;
  lastname: string;
  headshot: string;
  email: string;
  phonenumber: string;
  country?:string,
  interestedcourse:string,
  message: string;
}

type option = {
    label:string,
    value: string,
}
const inputStyle =
  "w-full mt-1 outline-none bg-white shadow-[#CBD0DB2E] shadow-xl p-2 border-[#EAEAEA] border rounded mb-4";
const fileinputStyle = "w-full file:bg-[#383838] file:text-white file:mr-3 file:hover:bg-[#383100] file:active:bg-[#606060] file:px-2 file:rounded-md file:cursor-pointer pointer-events-auto mt-1 outline-none bg-white shadow-[#CBD0DB2E] shadow-xl p-2 border-[#EAEAEA] border rounded mb-4";
const labelStyle = "text-sm font-medium";
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

const TrainingApplyForm = () => {
  const [isSubmitting,setIsSubmitting] = useState<boolean>(false);
  const [image,setImage] = useState<File | null>(null);
  const [dots, setDots] = useState("");
  const [submitted,setSubmitted] = useState<boolean>(false);
  const [form, setForm] = useState<FormType>({
    firstname: "",
    lastname:"",
    email: "",
    country:"",
    interestedcourse:"",
    phonenumber: "",
    headshot: "",
    message: "",
  });

  const courses = [
    "UI/UX Designing",
    "Digital Marketing",
    "Web Designing",
    "Web Development",
    "Digital Journalism",
    "SEO/SEM",
    "Social Media Management",
    "Email Marketing",
    "Express Computing",
    "Digital Literacy",
    "Cybersecurity",
    "Start Your Startup",
  ]
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement >
  ) => {
    const { id,value} = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };




  useEffect(()=>{
    const uploadImage = async () => {
    if (!image) return;
    
    const sigRes = await fetch("/api/cloudinary", {
      method: "POST",
    });
    const sigData = await sigRes.json();

    const formData = new FormData();
    formData.append("file", image);
    formData.append("api_key", sigData.apiKey);
    formData.append("timestamp", sigData.timestamp);
    formData.append("signature", sigData.signature);

    const uploadRes = await fetch(
      `https://api.cloudinary.com/v1_1/${sigData.cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    if(!uploadRes.ok){
      console.log("Error in uploading image to cloudinary")
    }
    const data = await uploadRes.json();
    setForm({...form,headshot: data.secure_url})
    console.log("Uploaded image:", form.headshot);
    }
    uploadImage();
  },[image])

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
    if(!form.headshot){return}
    console.log(form)
     setIsSubmitting(true)
    try {     
        const res = await fetch("/api/training-form", {
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
        setIsSubmitting(false);
       
      }
  } 


  const renderInput = (
    id: keyof typeof form,
    label: string,
    type: "text" | "email" | "dateTime-local" | "url" | "file" = "text",
    obligatory: boolean,
  ) => (
    <div key={id}>
      <label htmlFor={id} className={labelStyle}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        accept={type == "file" ? ".png,.jpg,.jpeg,.webp" : "*"}
        required
        onChange={handleChange}
        placeholder={`Enter ${label.toLowerCase()}`}
        className={type=="file" ?  `${fileinputStyle} focus:border-2 focus:border-[#055d59]`: `${inputStyle} focus:border-2 focus:border-[#055d59]`}
      />
    </div>
  );

  const renderSelect = (
    id: keyof typeof form,
    label: string,
    options: string[],
  ) => (
    <div key={id}>
      <label htmlFor={id} className={labelStyle}>
        {label}
      </label>
      <select
        id={id}
        required
        onChange={handleChange}
        className={`${inputStyle} focus:border-2 focus:border-[#055d59] cursor-pointer`}
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

  const renderphoneInput = (id: keyof typeof form,label:string)=>(
    <div className="block mt-1">
      <label htmlFor={id} className={`${labelStyle} block mb-1`}>
        {label}
      </label>
      <PhoneInput
        country={"np"}
        value={form.phonenumber}
        onChange={(phone) => setForm({...form,phonenumber: phone})}
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

  const renderSelectSearch = <K extends keyof FormType>(
    label: string,
    name: K,
    options: option[],
    required:boolean
  ) =>  (
      <div className="mb-4">
        <label className="block mb-1">{label}</label>
        <Select
          required = {required}
          isClearable
          instanceId={name as string}
          styles={customStyles}
          options={options}
          isSearchable
          onChange={selected => setForm({...form,[name]: selected?.value })}
        />
      </div>
    );

  return (
    <>
      <section className="max-w-[1180px] mx-auto p-4 md:px-0">
        {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="text-white bg-[#055d59] rounded-lg p-5 w-[90%] max-w-md text-center shadow-xl">
            <h2 className="text-xl font-semibold mb-3">
              Submitted Successfully
            </h2>
            <p className=" mb-3">
              Thank you! Our team will contact you soon.
            </p>
            <p className="text-sm">
              If you don’t receive an email within 24 hours, you can follow up by emailing us.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-[#055d59] text-white mt-3 border cursor-pointer active:bg-gray-300 active:text-[#055d59] hover:bg-white hover:text-[#055d59] border-white px-5 py-0.5 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
        )}
        <h1 className="text-3xl font-bold mb-4">Training Request Form</h1>
        <p className="text-sm mb-2">
          At SRIYOG Consulting, we offer training programs designed to go beyond classroom theory,
          giving you real-world, hands-on experience that prepares you for today’s competitive job market.
          With flexible learning options including Fast Track for quick skill acquisition, Normal Track for in-depth understanding,
          and both Virtual and Onsite training to match your convenience, our courses are tailored to your pace and style. 
        </p>
        <p className="text-sm mb-2">
          Choose from a diverse range of skill-focused programs such as UI/UX Designing, Digital Marketing, Web Designing,
          Web Development, Digital Journalism, SEO/SEM, Social Media Management, Email Marketing, Express Computing, Digital Literacy,
          Cybersecurity, and Start Your Startup. Whether you’re starting your career, upgrading your skills, or launching your own business,
          our practical, project-based approach ensures you gain the knowledge and confidence to excel.
        </p>
        <form onSubmit={handleSubmit} method="POST" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {renderInput('firstname',"First Name","text",true)}
            {renderInput('lastname',"Last Name","text",true)}
            {renderSelectSearch('Country','country',countries,true)}
            <div>
                <label className={labelStyle}>
                    Headshot
                </label>
                <input
                    type="file"
                    accept=".png,.jpg,.jpeg,.webp"
                    required
                    onChange={(e) => setImage(e.target.files?.[0] ?? null )}
                    className={fileinputStyle}
                />
            </div>
            {renderSelect("interestedcourse",'Interested Course',courses)}
            {renderInput("email", "Email", "email",true)}
            {renderphoneInput('phonenumber','Phone Number')}
            {renderInput("message", "Message","text",true)}  
             
          </div>
           <div className="text-sm text-[#555555] mt-6 gap-4 flex flex-col">
            <div className="flex items-start sm:items-center gap-2">
              <input type="checkbox"  required className="bg-[#555555] cursor-pointer mt-1.5 sm:mt-0" />{" "}
              <label>
                I confirm that all the information I have provided is accurate and complete.
              </label>
            </div>
            <div className="flex items-start sm:items-center gap-2">
              <input type="checkbox" className="cursor-pointer mt-1.5 sm:mt-0" required  />{" "}
              <label className="">
                I agree to attend the training sessions and abide by the program guidelines.
              </label>
            </div>
          </div>
          <div className="w-full flex justify-center mt-10 mb-16">
            <button
              type="submit"
              className="py-2 cursor-pointer px-10 text-white font-[800] bg-[#383838] rounded-sm hover:bg-[#555]"
            >
              {isSubmitting ? `Submitting${dots}` : "Submit Application"} 
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default TrainingApplyForm;
