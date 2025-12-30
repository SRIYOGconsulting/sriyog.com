"use client";
import Ribbon from "@/components/Ribbon";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import Select, { MultiValue } from "react-select";

type Form = {
  organizationName: string;
  province: string;
  district: string;
  municipality: string;
  wardNumber: string;
  formFiller: string;
  mobile: string;
  orgEmail: string;
  establishedYear: number | null;
  orgHead: string;
  qualification: string;
  headContact: string;
  headEmail: string;
  orgType: string;
  website: string;
  websiteCreated: string;
  officialEmail: string;
  websiteRedesignPlan: string;
  cms:string;
  websiteNecessity: string;
  websiteUpdateFrequency: string;
  websiteBenefitLevel: string;
  websiteSatisfaction: string;
  selfUpdateCapability: string;
  hasWebsiteAdmin: string;
  adminDashboardFeatures: option[];
  websiteChangeType: string;
  seoPriority: string;
  hasFacebookPage: string;
  facebookAdminCount: string;
  facebookUpdateStatus: string;
  facebookLikes: string;
  advertisingMediums: option[];
  promotionServicesNeeded: option[];
  socialMediaMarketingImportance: string;
  brandingPriority: string;
  googleMyBusiness: string;
  digitalMarketingImpact: string;
  needsCloudBackup: string;
  facesITIssues: string;
  needsITTraining: string;
  cloudSecurityAwareness: string;
  hasITManagementSystem: string;
  trelloAwareness: string;
  lookingForITServices: string;
  regularAppsUsed: option[];
  servicesUsed: option[];
  hasCCTV: string;
  usesBiometricSystem: string;
  numberOfComputers: string;
  socialMediaRiskAwareness: string;
  monitorsEmployeeActivities: string;
  //page 4
  computerCrashOutcome: string;
  maintainsCloudBackup: string;
  hasSocialMediaTeam: string;
  usesHardwareFirewall: string;
  hasCyberAttackPrevention: string;
  hasCustomerSupportDesk: string;
  importantDataStorage: string;
  usesLicensedWindows: string;
  monthlyITBudget: string;
  technologyFriendlyServices: option[];
  neededITProfessionals: option[];
  itIdeasQueries: string;
  otherSuggestions: string;
  itPromotionThoughts: string;
};

type option = {
    label:string,
    value: string,
}

export default function Survey() {
  const [isSubmitting,setIsSubmitting] = useState<boolean>(false);
  const [page,setPage] = useState<number>(1);
  const [submitted,setSubmitted] = useState<boolean>(false);
  const [submit,setSubmit] = useState<boolean>(false);
  const [isChecked1, setIsChecked1] = useState<boolean>(false);
  const [isChecked2, setIsChecked2] = useState<boolean>(false);
  const [ShowSubmit,setShowSubmit] = useState<boolean>(false);
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
  
  const orgOptions: option[] = [
    { value: "Agriculture", label: "Agriculture" },
    { value: "Education", label: "Education" },
    { value: "Government Bodies", label: "Government Bodies" },
    { value: "Hospital", label: "Hospital" },
    { value: "Hotel", label: "Hotel" },
    { value: "Institution", label: "Institution" },
    { value: "Mart", label: "Mart / Market / Shopping Center" },
    { value: "Party Palace", label: "Party Palace" },
    { value: "Production", label: "Production" },
    { value: "Restaurent", label: "Restaurent" },
    { value: "Shop", label: "Shop" },
    { value: "Showroom", label: "Showroom" },
    { value: "Social Service", label: "Social Service" },
    { value: "Trading", label: "Trading" },
    { value: "Other", label: "Other" },
  ];

  const DashboardFeature : option[] = [
    { label: "Cloud File Manager", value: "Cloud File Manager" },
    { label: "News Post", value: "News Post" },
    { label: "Blog Post", value: "Blog Post" },
    { label: "Event Post", value: "Event Post" },
    { label: "CMS", value: "CMS" },
    { label: "CRM", value: "CRM" },
    { label: "ERP", value: "ERP" },
    { label: "Calendar", value: "Calendar" },
    { label: "Email", value: "Email" },
    { label: "Internal Chat", value: "Internal Chat" },
  ];

  const promotionChannels: option[] = [
    { label: "Flex", value: "Flex" },
    { label: "In a National Daily", value: "National Daily" },
    { label: "Mass Email", value: "Mass Email" },
    { label: "Local Newspaper", value: "Local Newspaper" },
    { label: "Social Media", value: "Social Media" },
    { label: "F.M Radio", value: "F.M Radio" },
    { label: "Google Ads", value: "Google Ads" },
    { label: "Poster", value: "Poster" },
    { label: "Pamphlet", value: "Pamphlet" },
    { label: "Wall Painting", value: "Wall Painting" },
    { label: "WhatsApp", value: "Whatsapp" },
    { label: "Facebook", value: "Facebook" },
    { label: "Other", value: "Other" },
  ];

  const marketingMaterials: option[] = [
    { label: "Create a Brochure", value: "Create a Brochure" },
    { label: "Visiting Card", value: "Visiting Card" },
    { label: "Booklet", value: "Booklet" },
    { label: "Book", value: "Book" },
    { label: "Institutional Profile", value: "Institutional Profile" },
    { label: "Presentation", value: "Presentation" },
    { label: "Social Media", value: "Social Media" },
    { label: "Firewall", value: "Firewall" },
    { label: "Hoarding Board", value: "Hoarding Board" },
    { label: "Mobile Apps", value: "Mobile Apps" },
    { label: "E-commerce", value: "E-commerce" },
    { label: "Airbnb", value: "AirBnB" },
    { label: "Shelf Branding", value: "Shelf Branding" },
    { label: "Booking.com", value: "Booking.com" },
    { label: "Other", value: "Other" },
  ];

  const socialPlatformsOptions: option[] = [
    { label: "WhatsApp", value: "Whatsapp" },
    { label: "Viber", value: "Viber" },
    { label: "Messenger", value: "Messenger" },
    { label: "Instagram", value: "Instagram" },
    { label: "Signal", value: "Signal" },
    { label: "LinkedIn", value: "Linkedin" },
    { label: "Facebook", value: "Facebook" },
    { label: "YouTube", value: "YouTube" },
  ];

  const servicesOptions: option[] = [
    { label: "Freshdesk", value: "Freshdesk" },
    { label: "Zoho", value: "Zoho" },
    { label: "Google Workspace", value: "Google Workspace" },
    { label: "Yandex", value: "Yandex" },
    { label: "MEGA", value: "Mega" },
    { label: "Dropbox", value: "Dropbox" },
  ];

  const ItSkillsOptions:option[] = [
    { label: "Tally / Accounting", value: "Tally / Accounting" },
    { label: "Graphic Design", value: "Graphic Design" },
    { label: "Content Writing", value: "Content Writing" },
    { label: "Blogger", value: "Blogger" },
    { label: "YouTuber", value: "YouTuber" },
    { label: "Video Production", value: "Video Production" },
    { label: "Jingle Creation", value: "Jingle Creation" },
    { label: "App Development", value: "App Development" },
    { label: "Website Developer", value: "Website Developer" },
    { label: "Google Workspace Expert", value: "Google Workspace Expert" },
    { label: "Canva Expert", value: "Canva Expert" },
    { label: "Photoshop Expert", value: "Photoshop Expert" },
    { label: "Web Designer", value: "Web Designer" },
    { label: "CCTV Technician", value: "CCTV Technician" },
    { label: "Printer Repair", value: "Printer Repair" },
    { label: "Facebook Post", value: "Facebook Post" },
    { label: "Page Likes", value: "Page Likes" },
    { label: "Corporate Email", value: "Corporate Email" },
    { label: "Booking Form", value: "Booking Form" },
    { label: "Calendar Management", value: "Calendar Management" },
    { label: "Video Conferencing", value: "Video Conferencing" },
    { label: "Gmail Storage", value: "Gmail Storage" },
    { label: "Internet Security", value: "Internet Security" },
    { label: "Firewall", value: "Firewall" },
    { label: "Antivirus", value: "Antivirus" },
    { label: "Data Banking", value: "Data Banking" },
    { label: "Other", value: "Other" },
  ];

  const itServiceOptions:option[] = [
    { label: "Software Development", value: "Software Development" },
    { label: "Internet Marketing", value: "Internet Marketing" },
    { label: "IT Consultancy", value: "IT Consultancy" },
    { label: "Search Engine Optimization", value: "Search Engine Optimization" },
    { label: "Google Business Profiling", value: "Google Business Profiling" },
    { label: "Google Workspace", value: "Google Workspace" },
    { label: "IT Training / Workshop", value: "IT Training / Workshop" },
    { label: "IT Service Management", value: "IT Service Management" },
    { label: "IT Audit", value: "IT Audit" },
    { label: "Booking Form", value: "Booking Form" },
    { label: "CRM", value: "CRM" },
    { label: "CMS", value: "CMS" },
    { label: "ERP", value: "ERP" },
    { label: "CDN", value: "CDN" },
    { label: "Corporate Email", value: "Corporate Email" },
    { label: "Digital Marketing", value: "Digital Marketing" },
  ];

  const inputRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    if (page === 4) {
      // delay submit button by 200ms
      const timer = setTimeout(() => setShowSubmit(true), 200);
      return () => clearTimeout(timer);
    } else {
      setShowSubmit(false);
    }
  }, [page]);

  const [focusStates, setFocusStates] = useState({
    //page 1
    organizationName: false,
    province: false,
    district: false,
    municipality: false,
    wardNumber: false,
    formFiller: false,
    mobile: false,
    orgEmail: false,
    establishedYear: false,
    orgHead: false,
    qualification: false,
    headContact: false,
    headEmail: false,
    orgType: false,
    website: false,
    websiteCreated: false,
    officialEmail: false,
    //page 2
    websiteRedesignPlan: false,
    contentPublishing: false,
    websiteNecessity: false,
    websiteUpdateFrequency: false,
    websiteBenefitLevel: false,
    websiteSatisfaction: false,
    selfUpdateCapability: false,
    hasWebsiteAdmin: false,
    websiteChangeType: false,
    seoPriority: false,
    hasFacebookPage: false,
    facebookAdminCount: false,
    facebookUpdateStatus: false,
    facebookLikes: false,
    advertisingMediums: false,
    promotionServicesNeeded: false,
    socialMediaMarketingImportance: false,
    brandingPriority: false,
    googleMyBusiness: false,
    digitalMarketingImpact: false,
    //page 3
    needsCloudBackup: false,
    facesITIssues: false,
    needsITTraining: false,
    cloudSecurityAwareness: false,
    hasITManagementSystem: false,
    trelloAwareness: false,
    lookingForITServices: false,
    regularAppsUsed: false,
    servicesUsed: false,
    hasCCTV: false,
    usesBiometricSystem: false,
    numberOfComputers: false,
    socialMediaRiskAwareness: false,
    monitorsEmployeeActivities: false,
    //page 4
    computerCrashOutcome: false,
    maintainsCloudBackup: false,
    hasSocialMediaTeam: false,
    usesHardwareFirewall: false,
    hasCyberAttackPrevention: false,
    hasCustomerSupportDesk: false,
    importantDataStorage: false,
    usesLicensedWindows: false,
    monthlyITBudget: false,
    technologyFriendlyServices: false,
    neededITProfessionals: false,
    itIdeasQueries: false,
    otherSuggestions: false,
    itPromotionThoughts: false,
  });

  const [form, setForm] = useState<Form>({
    //page 1
    organizationName: "",
    province: "",
    district: "",
    municipality: "",
    wardNumber: "",
    formFiller: "",
    mobile: "",
    orgEmail: "",
    establishedYear: null,
    orgHead: "",
    qualification: "",
    headContact: "",
    headEmail: "",
    orgType: "",
    website: "",
    websiteCreated: "",
    officialEmail: "",
    //page 2
    websiteRedesignPlan: "",
    cms:"",
    websiteNecessity: "",
    websiteUpdateFrequency: "",
    websiteBenefitLevel: "",
    websiteSatisfaction: "",
    selfUpdateCapability: "",
    hasWebsiteAdmin: "",
    adminDashboardFeatures: [],
    websiteChangeType: "",
    seoPriority: "",
    hasFacebookPage: "",
    facebookAdminCount: "",
    facebookUpdateStatus: "",
    facebookLikes: "",
    advertisingMediums: [],
    promotionServicesNeeded: [],
    socialMediaMarketingImportance: "",
    brandingPriority: "",
    googleMyBusiness: "",
    digitalMarketingImpact: "",
    //page 3
    needsCloudBackup: "",
    facesITIssues: "",
    needsITTraining: "",
    cloudSecurityAwareness: "",
    hasITManagementSystem: "",
    trelloAwareness: "",
    lookingForITServices: "",
    regularAppsUsed: [],
    servicesUsed: [],
    hasCCTV: "",
    usesBiometricSystem: "",
    numberOfComputers: "",
    socialMediaRiskAwareness: "",
    monitorsEmployeeActivities: "",
    //page 4
    computerCrashOutcome: "",
    maintainsCloudBackup: "",
    hasSocialMediaTeam: "",
    usesHardwareFirewall: "",
    hasCyberAttackPrevention: "",
    hasCustomerSupportDesk: "",
    importantDataStorage: "",
    usesLicensedWindows: "",
    monthlyITBudget: "",
    technologyFriendlyServices: [],
    neededITProfessionals: [],
    itIdeasQueries: "",
    otherSuggestions: "",
    itPromotionThoughts: "",
  });
  const requiredPages: Record<number, (keyof Form)[]> = {
  1: ["organizationName","province","district","municipality","formFiller","mobile","orgEmail","orgHead","qualification","orgType"],
  2: ["socialMediaMarketingImportance","brandingPriority","googleMyBusiness","digitalMarketingImpact",],
  3: ["needsCloudBackup","facesITIssues","needsITTraining","cloudSecurityAwareness","hasITManagementSystem","trelloAwareness","lookingForITServices","regularAppsUsed","servicesUsed","hasCCTV","usesBiometricSystem","numberOfComputers","socialMediaRiskAwareness","monitorsEmployeeActivities",],
  4: ["computerCrashOutcome","maintainsCloudBackup","hasSocialMediaTeam","usesHardwareFirewall","hasCyberAttackPrevention","hasCustomerSupportDesk","importantDataStorage","usesLicensedWindows",]
  };



  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)=>{
    setForm({...form,[e.target.name]: e.target.value})
  }

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(form)
  if (!isChecked1 || !isChecked2) return;
  if (!submit)return;
  for (const field of requiredPages[4]) {
      const value = form[field];
      if (!value || (Array.isArray(value) && value.length === 0)) {
        // switch to page
        setPage(4);

        // scroll after page renders
        setTimeout(() => {
          inputRefs.current[field]?.scrollIntoView({ behavior: "smooth", block: "center" });
          inputRefs.current[field]?.focus();
        }, 100);

        return; // stop submit
      }
    }
      setIsSubmitting(true);
      try {
        const res = await fetch("/api/survey-form", {
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
};



  const goToNextPage = () => {
    for (const field of requiredPages[page]) {
        const value = form[field];

        if (value === "" || (Array.isArray(value) && value.length === 0)) {

        setTimeout(() => {
            inputRefs.current[field]?.scrollIntoView({ behavior: "smooth", block: "center" });
            inputRefs.current[field]?.focus();
        }, 200); 
        return; 
        }
    }
    scrollToTop();
    setPage(page + 1);
    
  };



  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const inputField =
    "w-full  mt-1 outline-none bg:[#FFFFFF] shadow-[#CBD0DB2E] shadow-xl p-2  border-[#EAEAEA] border-1 rounded mb-4";
  
  return (
    <>
      <Ribbon name="IT Survey Form" des="" />
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="text-white bg-[#055d59] rounded-lg p-5 w-[90%] max-w-md text-center shadow-xl">
            <h2 className="text-xl font-semibold mb-3">
              Submitted Successfully
            </h2>
            <p className=" mb-5">
              Thank you! Your survey has been submitted successfully.
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
        <form method="POST" onSubmit={handleSubmit}>
         <div className="flex flex-col gap-6 items-start md:items-stretch align-center justify-center ">
          {/* Page 1 */}
          {page === 1 && 
            <>
            <h1 className="mb-10 text-justify sm:text-base leading-relaxed">This survey aims to understand the IT challenges faced by organizations—including schools,
            colleges, businesses, healthcare, government, and trading sectors—such as ransomware,
            viruses, data loss, cyber-attacks, account issues, and system failures.
            The goal is to identify solutions and explore how adopting information technology can
            make organizations more efficient, secure, and future-ready.</h1>
            <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 items-start gap-6">
             {/* Organization Name */}
            <div>
            <label>Organization Name *</label>
            <input
                ref={el => {inputRefs.current["organizationName"] = el}}
                required
                value={form.organizationName}
                type="text"
                placeholder={focusStates.organizationName ? "" : "Enter organization name"}
                name="organizationName"
                onChange={handleChange}
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

            {/* Province */}
            <div>
            <label>Province *</label>
            <input
                value={form.province}
                ref={el => {inputRefs.current["province"] = el}}
                required
                type="text"
                placeholder={focusStates.province ? "" : "Enter province"}
                name="province"
                onChange={handleChange}
                onFocus={() => setFocusStates({ ...focusStates, province: true })}
                onBlur={(e) =>
                setFocusStates({
                    ...focusStates,
                    province: e.target.value ? true : false,
                })
                }
                className={inputField}
            />
            </div>

            {/* District */}
            <div>
            <label>District *</label>
            <input
                required
                value={form.district}
                ref={el => {inputRefs.current["district"] = el}}
                type="text"
                placeholder={focusStates.district ? "" : "Enter district"}
                name="district"
                onChange={handleChange}
                onFocus={() => setFocusStates({ ...focusStates, district: true })}
                onBlur={(e) =>
                setFocusStates({
                    ...focusStates,
                    district: e.target.value ? true : false,
                })
                }
                className={inputField}
            />
            </div>

            {/* Municipality */}
            <div>
            <label>Municipality *</label>
            <input
                required
                type="text"
                value={form.municipality}
                ref={el => {inputRefs.current["municipality"] = el}}
                placeholder={focusStates.municipality ? "" : "Enter municipality"}
                name="municipality"
                onChange={handleChange}
                onFocus={() => setFocusStates({ ...focusStates, municipality: true })}
                onBlur={(e) =>
                setFocusStates({
                    ...focusStates,
                    municipality: e.target.value ? true : false,
                })
                }
                className={inputField}
            />
            </div>

            {/* Ward Number */}
            <div>
            <label>Ward Number</label>
            <input
                type="number"
                min={0}
                value={form.wardNumber}
                placeholder={focusStates.wardNumber ? "" : "Enter ward number"}
                name="wardNumber"
                onChange={handleChange}
                onFocus={() => setFocusStates({ ...focusStates, wardNumber: true })}
                onBlur={(e) =>
                setFocusStates({
                    ...focusStates,
                    wardNumber: e.target.value ? true : false,
                })
                }
                className={inputField}
            />
            </div>

            {/* Person Filling the Form */}
            <div>
            <label>Name of the Person Filling the Form *</label>
            <input
                value={form.formFiller}
                ref={el => {inputRefs.current["formFiller"] = el}}
                required
                pattern="^[A-Za-z ]+$"
                type="text"
                placeholder={focusStates.formFiller ? "" : "Enter full name"}
                name="formFiller"
                onChange={handleChange}
                onFocus={() => setFocusStates({ ...focusStates, formFiller: true })}
                onBlur={(e) =>
                setFocusStates({
                    ...focusStates,
                    formFiller: e.target.value ? true : false,
                })
                }
                className={inputField}
            />
            </div>

            {/* Mobile Phone Number */}
            <div>
            <label>Mobile Phone Number *</label>
            <input
                value={form.mobile}
                ref={el => {inputRefs.current["mobile"] = el}}
                required
                type="text"
                placeholder={focusStates.mobile ? "" : "eg: +977-981234XXXX"}
                name="mobile"
                onChange={handleChange}
                onFocus={() => setFocusStates({ ...focusStates, mobile: true })}
                onBlur={(e) =>
                setFocusStates({
                    ...focusStates,
                    mobile: e.target.value ? true : false,
                })
                }
                className={inputField}
            />
            </div>

            {/* Organization Email */}
            <div>
            <label>Organization Email *</label>
            <input
                required
                value={form.orgEmail}
                type="email"
                ref={el => {inputRefs.current["orgEmail"] = el}}
                placeholder={focusStates.orgEmail ? "" : "Enter organization email"}
                name="orgEmail"
                onChange={handleChange}
                onFocus={() => setFocusStates({ ...focusStates, orgEmail: true })}
                onBlur={(e) =>
                setFocusStates({
                    ...focusStates,
                    orgEmail: e.target.value ? true : false,
                })
                }
                className={inputField}
            />
            </div>

            {/* Year of Establishment */}
            <div>
            <label>Year of Establishment</label>
            <input
                type="number"
                value={form.establishedYear as number}
                placeholder={focusStates.establishedYear ? "" : "e.g. 2015"}
                name="establishedYear"
                onChange={handleChange}
                onFocus={() => setFocusStates({ ...focusStates, establishedYear: true })}
                onBlur={(e) =>
                setFocusStates({
                    ...focusStates,
                    establishedYear: e.target.value ? true : false,
                })
                }
                className={inputField}
            />
            </div>

            {/* Organization Head Name */}
            <div>
            <label>Name of Organization Head *</label>
            <input
                value={form.orgHead}
                required
                type="text"
                ref={el => {inputRefs.current["orgHead"] = el}}
                placeholder={focusStates.orgHead ? "" : "Enter head's name"}
                name="orgHead"
                onChange={handleChange}
                onFocus={() => setFocusStates({ ...focusStates, orgHead: true })}
                onBlur={(e) =>
                setFocusStates({
                    ...focusStates,
                    orgHead: e.target.value ? true : false,
                })
                }
                className={inputField}
            />
            </div>

            {/* Educational Qualification */}
            <div>
            <label>Educational Qualification of Organization Head *</label>
            <input
                required
                value={form.qualification}
                type="text"
                ref={el => {inputRefs.current["qualification"] = el}}
                placeholder={focusStates.qualification ? "" : "Enter qualification"}
                name="qualification"
                onChange={handleChange}
                onFocus={() => setFocusStates({ ...focusStates, qualification: true })}
                onBlur={(e) =>
                setFocusStates({
                    ...focusStates,
                    qualification: e.target.value ? true : false,
                })
                }
                className={inputField}
            />
            </div>

            {/* Organization Head Contact */}
            <div>
            <label>Contact Number of Organization Head</label>
            <input
                type="string"
                placeholder={focusStates.headContact ? "" : "eg: +977-981234XXXX"}
                value={form.headContact}
                name="headContact"
                onChange={handleChange}
                onFocus={() => setFocusStates({ ...focusStates, headContact: true })}
                onBlur={(e) =>
                setFocusStates({
                    ...focusStates,
                    headContact: e.target.value ? true : false,
                })
                }
                className={inputField}
            />
            </div>

            {/* Organization Head Email */}
            <div>
            <label>Email of Organization Head</label>
            <input
                value={form.headEmail}
                type="email"
                placeholder={focusStates.headEmail ? "" : "Enter email address"}
                name="headEmail"
                onChange={handleChange}
                onFocus={() => setFocusStates({ ...focusStates, headEmail: true })}
                onBlur={(e) =>
                setFocusStates({
                    ...focusStates,
                    headEmail: e.target.value ? true : false,
                })
                }
                className={inputField}
            />
            </div>

            {/* Type of Organization */}
            <div ref={el => { inputRefs.current["orgType"] = el }} className="block mb-4">
            <label className="mb-1 block">Type of Organization *</label>
            <Select
                instanceId="organization-type"
                options={orgOptions}
                required
                value={orgOptions.find(opt => opt.value === form.orgType) || null}
                styles={customStyles}
                onChange={(option) =>
                    setForm({ ...form, orgType: option?.value ?? "" })
                }
            />
            </div>

            {/* Website URL */}
            <div>
            <label>Website URL</label>
            <select name="website" value={form.website} style={{cursor: "pointer"}} onChange={handleChange} className={inputField} >
                <option value="">Select option...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            </div>

            {/* Website Created */}
            <div>
            <label>When was the website created?</label>
            <select name="websiteCreated" value={form.websiteCreated} style={{cursor: "pointer"}} onChange={handleChange} className={inputField}>
                <option value="">Select option...</option>
                <option value="Don't know">Don't know</option>
                <option value="Must see">Must see</option>
                <option value="We made it before, but it doesn't work now">We made it before, but it doesn't work now</option>
            </select>
            </div>

            {/* Official Email */}
            <div>
            <label>
                Does your organization have an official email? (e.g., info@yourcompany.com)
            </label>
            <input
                type="email"
                value={form.officialEmail}
                placeholder={focusStates.officialEmail ? "" : "Enter official email"}
                name="officialEmail"
                onChange={handleChange}
                onFocus={() => setFocusStates({ ...focusStates, officialEmail: true })}
                onBlur={(e) =>
                setFocusStates({
                    ...focusStates,
                    officialEmail: e.target.value ? true : false,
                })
                }
                className={inputField}
            />
            </div>
            
            {/* Website Redesign Plan */}
            <div>
            <label>Are you planning to redesign or update your old website?</label>
            <select value={form.websiteRedesignPlan} name="websiteRedesignPlan" className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not necessary">Not necessary</option>
                <option value="No budget">No budget</option>
                <option value="Other">Other</option>
            </select>
            </div>

            


            </div>
            </>
          }


          {/* Page 2 */}
          {page === 2 && 
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 items-end">
            {/* Website CMS */}
            <div>
            <label>Does your organization’s website use a Content Management System (CMS)?</label>
            <select value={form.cms} name="cms" className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not sure">Not sure</option>
            </select>
            </div>

            {/* Website Necessity */}
            <div>
            <label>How necessary is a website for your organization?</label>
            <select value={form.websiteNecessity} name="websiteNecessity" className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Mandatory">Mandatory</option>
                <option value="Not much">Not much</option>
            </select>
            </div>

            {/* Website Update Frequency */}
            <div>
            <label>How often do you update your website per month?</label>
            <select value={form.websiteUpdateFrequency} name="websiteUpdateFrequency" className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="We don't">We don't</option>
                <option value="Sometimes">Sometimes</option>
                <option value="Once">Once</option>
                <option value="Twice">Twice</option>
                <option value="When down">When down</option>
                <option value="Don't know">Don't know</option>
            </select>
            </div>

            {/* Website Benefit */}
            <div>
            <label>How beneficial has having a website been for your organization?</label>
            <select value={form.websiteBenefitLevel} name="websiteBenefitLevel" className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="Very high benifit">Very high benifit</option>
                <option value="High benifit">High benifit</option>
                <option value="Moderate benifit">Moderate benifit</option>
                <option value="Low benefit">Low benefit</option>
                <option value="No benifit">No benifit</option>
            </select>
            </div>

            {/* Website Satisfaction */}
            <div>
            <label>How satisfied are you with your organization’s website?</label>
            <select value={form.websiteSatisfaction} name="websiteSatisfaction" className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="Very satisfied">Very satisfied</option>
                <option value="Satisfied">Satisfied</option>
                <option value="Neutral">Neutral</option>
                <option value="Dissatisfied">Dissatisfied</option>
                <option value="Very dissatisfied">Very dissatisfied</option>
            </select>
            </div>

            {/* Self Update Capability */}
            <div>
            <label>Can you update the website yourself?</label>
            <select value={form.selfUpdateCapability} name="selfUpdateCapability" className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="It's hard">It's hard</option>
                <option value="We do it easily">We do it easily</option>
                <option value="Not necessary">Not necessary</option>
                <option value="Can't">Can't</option>
                <option value="We have to learn">We have to learn</option>
                <option value="Other">Other</option>
            </select>
            </div>

            {/* Website Admin */}
            <div>
            <label>Do you have a dedicated IT staff or website administrator?</label>
            <select value={form.hasWebsiteAdmin} name="hasWebsiteAdmin" className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Looking for">Looking for</option>
                <option value="It should">It should</option>
                <option value="Other">Other</option>
            </select>
            </div>

            {/* Website Admin Dashboard*/}
            <div className="block mb-4">
            <label className="block mb-1">What features are available in your website admin dashboard?</label>
            <Select
                options={DashboardFeature}
                isMulti
                value={form.adminDashboardFeatures} // array of selected options
                styles={customStyles}
                onChange={(selected: MultiValue<option>) =>
                    setForm({ ...form, adminDashboardFeatures: selected as option[] })
                }
            />
            </div>

            {/* Website Change Type */}
            <div>
            <label>Do you want to create a new website or make minor changes?</label>
            <select value={form.websiteChangeType} name="websiteChangeType" className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="Full Redesign">Full Redesign</option>
                <option value="Normal Update">Normal Update</option>
            </select>
            </div>

            {/* SEO Priority */}
            <div>
            <label>Do you want your website to appear at the top of Google search results?</label>
            <select value={form.seoPriority} name="seoPriority" className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Don't know">Don't know</option>
                <option value="Other">Other</option>
            </select>
            </div>

            {/* Facebook Page Availability */}
            <div>
            <label>Does your organization have a Facebook page?</label>
            <select value={form.hasFacebookPage} name="hasFacebookPage" className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="Yes">Yes</option>
                <option value="We are ready to make">We are ready to make</option>
                <option value="There is but not much update">There is but not much update</option>
                <option value="No">No</option>
                <option value="Other">Other</option>
            </select>
            </div>

            {/* Facebook Admin Count */}
            <div>
            <label>How many admins manage the Facebook page?</label>
            <select value={form.facebookAdminCount} name="facebookAdminCount" className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="More than five">More than five</option>
                <option value="Don't know">Don't know</option>
            </select>
            </div>

            {/* Facebook Update Frequency */}
            <div>
            <label>Is the Facebook page updated regularly?</label>
            <select value={form.facebookUpdateStatus} name="facebookUpdateStatus" className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="Daily">Daily</option>
                <option value="Several times a week">Several times a week</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Rarely / Not updated">Rarely / Not updated</option>
            </select>
            </div>

            {/* Facebook Likes */}
            <div>
            <label>How many likes does your Facebook page have?</label>
            <select value={form.facebookLikes} name="facebookLikes" className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="Up to 500">Up to 500</option>
                <option value="Up to 1000">Up to 1000</option>
                <option value="Up to 5000">Up to 5000</option>
                <option value="We are trying to increase page likes">We are trying to increase page likes</option>
                <option value="Other">Other</option>
            </select>
            </div>

            {/* Advertising Mediums */}
            <div className="block mb-4">
            <label className="block mb-1">Which advertising mediums are you using to promote your products/services?</label>
            <Select
                options={promotionChannels}
                isMulti
                value={form.advertisingMediums} // array of selected options
                styles={customStyles}
                onChange={(selected: MultiValue<option>) =>
                    setForm({ ...form, advertisingMediums: selected as option[] })
                }
            />
            </div>

            {/* Promotion Services Needed */}
            <div className="block mb-4">
            <label className="block mb-1">Which of the following services do you need for business promotion?</label>
            <Select
                options={marketingMaterials}
                isMulti
                value={form.promotionServicesNeeded} // array of selected options
                styles={customStyles}
                onChange={(selected: MultiValue<option>) =>
                    setForm({ ...form, promotionServicesNeeded: selected as option[] })
                }
            />
            </div>

            {/* Social Media Marketing Importance */}
            <div>
            <label>How important is Facebook & Instagram marketing for your organization? *</label>
            <select value={form.socialMediaMarketingImportance} ref={el => { inputRefs.current["socialMediaMarketingImportance"] = el }} name="socialMediaMarketingImportance" required className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="Very Important">Very Important</option>
                <option value="Important">Important</option>
                <option value="Somehow Important">Somehow Important</option>
                <option value="Slightly / low importance">Slightly / low importance</option>
                <option value="Not Important">Not Important</option>
            </select>
            </div>

            {/* Branding Priority */}
            <div>
            <label>How much important is product or service branding? *</label>
            <select value={form.brandingPriority} ref={el => { inputRefs.current["brandingPriority"] = el }} name="brandingPriority" required className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="Very Important">Very Important</option>
                <option value="Important">Important</option>
                <option value="Somehow Important">Somehow Important</option>
                <option value="Slightly / low importance">Slightly / low importance</option>
                <option value="Not Important">Not Important</option>
            </select>
            </div>

            {/* Google My Business */}
            <div>
            <label>Do you use Google My Business? *</label>
            <select value={form.googleMyBusiness} name="googleMyBusiness" ref={el => { inputRefs.current["googleMyBusiness"] = el }} required className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Maybe">Maybe</option>
                <option value="Don't know">Don't know</option>
            </select>
            </div>

            {/* Digital Marketing Growth */}
            <div>
            <label>Does digital marketing help in business growth? *</label>
            <select value={form.digitalMarketingImpact} name="digitalMarketingImpact" ref={el => { inputRefs.current["digitalMarketingImpact"] = el }} required className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="Does">Does</option>
                <option value="Doesn't">Doesn't</option>
                <option value="Can do">Can do</option>
                <option value="I don't know">I don't know</option>
                <option value="We are looking for detailed informations">We are looking for detailed informations</option>
            </select>
            </div>
                   
          </div>
          }


          {page === 3 && 
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 items-end">
            {/* Cloud Backup & Storage */}
            <div>
            <label>Does your organization need cloud file backup and storage? *</label>
            <select value={form.needsCloudBackup} ref={el => { inputRefs.current["needsCloudBackup"] = el }} name="needsCloudBackup" required className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Don't know">Don't know</option>
            </select>
            </div>

            {/* IT-related Issues */}
            <div>
            <label>Does your organization face any IT-related issues? *</label>
            <select value={form.facesITIssues} ref={el => { inputRefs.current["facesITIssues"] = el }} name="facesITIssues" required className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Sometimes">Sometimes</option>
            </select>
            </div>

            {/* IT Training / Awareness */}
            <div>
            <label>Does your organization need IT-related training or awareness programs? *</label>
            <select value={form.needsITTraining} ref={el => { inputRefs.current["needsITTraining"] = el }} name="needsITTraining" required className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            </div>

            {/* Free Cloud Security */}
            <div>
            <label>Do free cloud storage services ensure data security and privacy? *</label>
            <select value={form.cloudSecurityAwareness} ref={el => { inputRefs.current["cloudSecurityAwareness"] = el }} name="cloudSecurityAwareness" required className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not sure">Not sure</option>
            </select>
            </div>

            {/* IT Management System */}
            <div>
            <label>Do you have an IT and software management system? *</label>
            <select value={form.hasITManagementSystem} ref={el => { inputRefs.current["hasITManagementSystem"] = el }} name="hasITManagementSystem" required className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            </div>

            {/* Trello Awareness */}
            <div>
            <label>Are you aware that Trello can be an effective team management platform? *</label>
            <select value={form.trelloAwareness} ref={el => { inputRefs.current["trelloAwareness"] = el }} name="trelloAwareness" required className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Somewhat">Somewhat</option>
                <option value="Not sure">Not sure</option>
            </select>
            </div>

            {/* IT Services / Consultation */}
            <div>
            <label>Are you looking for IT training/services/consultation? *</label>
            <select value={form.lookingForITServices} ref={el => { inputRefs.current["lookingForITServices"] = el }} name="lookingForITServices" required className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            </div>

            {/* Regular Apps Used */}
            <div ref={el => { inputRefs.current["regularAppsUsed"] = el }} className="mb-4">
            <label className="block mb-1">Which apps do you use regularly? *</label>
            <Select
                options={socialPlatformsOptions}
                required
                isMulti
                value={form.regularAppsUsed}
                styles={customStyles}
                onChange={(selected: MultiValue<option>) =>
                    setForm({ ...form, regularAppsUsed: selected as option[] })
                }
            />
            </div>

            {/* Services Used */}
            <div ref={el => { inputRefs.current["servicesUsed"] = el }} className="mb-4">
            <label className="block mb-1">Which of the following cloud-based services have you used? *</label>
            <Select
                options={servicesOptions}
                required
                isMulti
                value={form.servicesUsed} // array of selected options
                styles={customStyles}
                onChange={(selected: MultiValue<option>) =>
                    setForm({ ...form, servicesUsed: selected as option[] })
                }
            />
            </div>

            {/* CCTV Cameras */}
            <div>
            <label>Does your organization have CCTV cameras? *</label>
            <select value={form.hasCCTV} ref={el => { inputRefs.current["hasCCTV"] = el }} name="hasCCTV" required className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            </div>

            {/* Biometric Systems */}
            <div> 
            <label>Do you use biometric attendance systems (thumb scan, retina scan, etc.)? *</label>
            <select value={form.usesBiometricSystem} ref={el => { inputRefs.current["usesBiometricSystem"] = el }} name="usesBiometricSystem" required className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="No need">No need</option>
                <option value="Other">Other</option>
            </select>
            </div>

            {/* Number of Computers */}
            <div>
            <label>How many computers are there in your organization? *</label>
            <select value={form.numberOfComputers} ref={el => { inputRefs.current["numberOfComputers"] = el }} name="numberOfComputers" required className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="0-5">0 - 5</option>
                <option value="6 - 15">6 - 15</option>
                <option value="16 - 30">16 - 30</option>
                <option value="31 - 60">31 - 60</option>
                <option value="61 - 90">61 - 90</option>
                <option value="91 - 150">91 - 150</option>
            </select>
            </div>

            {/* Social Media Risk Awareness */}
            <div>
            <label>Are your employees aware of social media risks and how to respond to them? *</label>
            <select value={form.socialMediaRiskAwareness} ref={el => { inputRefs.current["socialMediaRiskAwareness"] = el }} name="socialMediaRiskAwareness" required className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Somewhat">Somewhat</option>
            </select>
            </div>

            {/* Employee Activity Monitoring */}
            <div>
            <label>Do you use any technology to monitor employee activities? *</label>
            <select value={form.monitorsEmployeeActivities} ref={el => { inputRefs.current["monitorsEmployeeActivities"] = el }} name="monitorsEmployeeActivities" required className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            </div>

          </div>
          }

          {page === 4 &&
          <>
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 items-end gap-6">
            {/* Computer Crash Scenario */}
            <div>
            <label>If your computer crashes after an update, what happens? *</label>
            <input
                value={form.computerCrashOutcome}
                type="text"
                ref={el => { inputRefs.current["computerCrashOutcome"] = el }}
                required
                name="computerCrashOutcome"
                placeholder={focusStates.computerCrashOutcome ? "" : "Describe the outcome"}
                onChange={handleChange}
                onFocus={() => setFocusStates({ ...focusStates, computerCrashOutcome: true })}
                onBlur={(e) =>
                setFocusStates({
                    ...focusStates,
                    computerCrashOutcome: e.target.value ? true : false,
                })
                }
                className={inputField}
            />
            </div>

            {/* Cloud Backup */}
            <div>
            <label>Do you maintain cloud backups for your data? *</label>
            <select value={form.maintainsCloudBackup} name="maintainsCloudBackup" ref={el => { inputRefs.current["maintainsCloudBackup"] = el }} required className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="We have our own server">We have our own server</option>
                <option value="Want to get service">Want to get service</option>
                <option value="Don't know">Don't know</option>
            </select>
            </div>

            {/* Social Media Team */}
            <div>
            <label>Do you have a social media management team to connect with customers? *</label>
            <select value={form.hasSocialMediaTeam} ref={el => { inputRefs.current["hasSocialMediaTeam"] = el }} name="hasSocialMediaTeam" required className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Don't know">Don't know</option>
                <option value="We want to take service">We want to take service</option>
            </select>
            </div>

            {/* Hardware Firewall */}
            <div>
            <label>Do you use a hardware firewall to protect data from malware, spyware, and ransomware? *</label>
            <select value={form.usesHardwareFirewall} ref={el => { inputRefs.current["usesHardwareFirewall"] = el }} name="usesHardwareFirewall" required className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Don't know">Don't know</option>
                <option value="Looking for detailed information">Looking for detailed information</option>
            </select>
            </div>

            {/* Cyber Attack Prevention */}
            <div>
            <label>Do you have a system to bypass or prevent cyber-attacks? *</label>
            <select value={form.hasCyberAttackPrevention} ref={el => { inputRefs.current["hasCyberAttackPrevention"] = el }} name="hasCyberAttackPrevention" required className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Did not search">Did not search</option>
                <option value="Don't know">Don't know</option>
                <option value="Looking for detailed information">Looking for detailed information</option>
            </select>
            </div>

            {/* Customer Support Desk */}
            <div>
            <label>Do you have a customer support desk/system? *</label>
            <select value={form.hasCustomerSupportDesk} ref={el => { inputRefs.current["hasCustomerSupportDesk"] = el }} name="hasCustomerSupportDesk" required className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Don't know">Don't know</option>
                <option value="Looking for detailed information">Looking for detailed information</option>
            </select>
            </div>

            {/* Important Data Storage */}
            <div>
            <label>Where do you store your important data? *</label>
            <select value={form.importantDataStorage} ref={el => { inputRefs.current["importantDataStorage"] = el }} name="importantDataStorage" required className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="Google Drive">Google Drive</option>
                <option value="Drop box">Drop box</option>
                <option value="Mega">Mega</option>
                <option value="Van Drive">Van Drive</option>
                <option value="iCloud">iCloud</option>
                <option value="Looking for service">Looking for service</option>
            </select>
            </div>

            {/* Licensed Windows */}
            <div>
            <label>Do you use licensed Microsoft Windows? *</label>
            <select value={form.usesLicensedWindows} ref={el => { inputRefs.current["usesLicensedWindows"] = el }} name="usesLicensedWindows" required className={inputField} style={{cursor: "pointer"}} onChange={handleChange}>
                <option value="">Select option...</option>
                <option value="Yes">Yes</option>
                <option value="No">No, cracked</option>
                <option value="Don't know">Don't know</option>
                <option value="Trying to keep it genuine">Trying to keep it genuine</option>
                <option value="Other">Other</option>
            </select>
            </div>

            {/* IT Budget */}
            <div>
            <label>What is your monthly budget for IT management?</label>
            <input
                value={form.monthlyITBudget}
                type="text"
                name="monthlyITBudget"
                placeholder={focusStates.monthlyITBudget ? "" : "e.g. $1000"}
                onChange={handleChange}
                onFocus={() => setFocusStates({ ...focusStates, monthlyITBudget: true })}
                onBlur={(e) =>
                setFocusStates({
                    ...focusStates,
                    monthlyITBudget: e.target.value ? true : false,
                })
                }
                className={inputField}
            />
            </div>

            {/* Technology-friendly Services */}
            <div className="block mb-4">
            <label className="block mb-1">Which services would be suitable to make your organization more technology-friendly?</label>
            <Select
                options={itServiceOptions}
                isMulti
                value={form.technologyFriendlyServices}
                styles={customStyles}
                onChange={(selected: MultiValue<option>) =>
                    setForm({ ...form, technologyFriendlyServices: selected as option[] })
                }
            />
            </div>

            {/* Skilled IT Professionals */}
            <div className="block mb-4">
            <label className="block mb-1">What type of skilled IT professionals or services do you need?</label>
            <Select
                options={ItSkillsOptions}
                isMulti
                value={form.neededITProfessionals}
                styles={customStyles}
                onChange={(selected: MultiValue<option>) =>
                    setForm({ ...form, neededITProfessionals: selected as option[] })
                }
            />
            </div>

            {/* IT Ideas / Queries */}
            <div>
            <label>Share any IT-related ideas, information, or queries</label>
            <input
                type="text"
                value={form.itIdeasQueries}
                name="itIdeasQueries"
                placeholder={focusStates.itIdeasQueries ? "" : "Your ideas here..."}
                onChange={handleChange}
                onFocus={() => setFocusStates({ ...focusStates, itIdeasQueries: true })}
                onBlur={(e) =>
                setFocusStates({
                    ...focusStates,
                    itIdeasQueries: e.target.value ? true : false,
                })
                }
                className={inputField}
            />
            </div>

            {/* Other Suggestions / Feedback */}
            <div>
            <label>Any other suggestions or feedback?</label>
            <input
                type="text"
                name="otherSuggestions"
                value={form.otherSuggestions}
                placeholder={focusStates.otherSuggestions ? "" : "Your feedback here..."}
                onChange={handleChange}
                onFocus={() => setFocusStates({ ...focusStates, otherSuggestions: true })}
                onBlur={(e) =>
                setFocusStates({
                    ...focusStates,
                    otherSuggestions: e.target.value ? true : false,
                })
                }
                className={inputField}
            />
            </div>

            {/* IT Promotion Thoughts */}
            <div>
            <label>How can information technology help promote services and products? Please share your thoughts.</label>
            <input
                type="text"
                value={form.itPromotionThoughts}
                name="itPromotionThoughts"
                placeholder={focusStates.itPromotionThoughts ? "" : "Your thoughts here..."}
                onChange={handleChange}
                onFocus={() => setFocusStates({ ...focusStates, itPromotionThoughts: true })}
                onBlur={(e) =>
                setFocusStates({
                    ...focusStates,
                    itPromotionThoughts: e.target.value ? true : false,
                })
                }
                className={inputField}
            />
            </div>

          </div>
          <div className="text-sm text-[#555555] mt-0 mb-1 gap-1 flex flex-col">
            <div className="flex items-center gap-2">
              <input type="checkbox"  required checked={isChecked1} onChange={(e) => setIsChecked1(e.target.checked)}  className="bg-[#555555] cursor-pointer" />{" "}
              <label>
                I have the client’s permission to share their contact information
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="cursor-pointer" required  checked={isChecked2} onChange={(e) => setIsChecked2(e.target.checked)} />{" "}
              <label>
                I understand that submitting this survey does not guarantee
                compensation unless specified in a formal agreement.
              </label>
            </div>
          </div>
          </>
          }
          </div>


          <div className="flex items-center py-8">
            {page != 1 && 
            <div className="flex justify-start items-center w-full">
                <button type="button"
                className="py-1 cursor-pointer  active:bg-blue-300 hover:bg-blue-500 px-6  text-gray-900 font-[800] bg-blue-400 border-[#055D59]-1 rounded-sm "
                onClick={()=>{setPage(p=>p !=1 ? p-1 : p);scrollToTop()}}>Prev</button>
            </div>}
            {page != 4 &&
            <div className="flex justify-end w-full">
            <button
                type="submit"
                className="py-1 cursor-pointer active:bg-[#7a7a7a] hover:bg-red-500 px-6  text-white font-[800] bg-red-500 border-[#055D59]-1 rounded-sm " 
                onClick={()=>{goToNextPage(),setSubmit(false)}}
             >Next
            </button>
            </div>
            }
            {ShowSubmit &&
            <div className="flex justify-end w-full">
                <button
                onClick={()=>setSubmit(true)}
                className="py-1 cursor-pointer  active:bg-[#7a7a7a] hover:bg-[#464646] px-6  text-white font-[800] bg-[#383838] border-[#055D59]-1 rounded-sm "
                >
                {isSubmitting ? "Submitting..." : "Submit Survey"}
                </button>
            </div>}
          </div>
          
        </form>
      </section>
    </>
  );
}
