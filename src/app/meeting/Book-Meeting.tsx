"use client";

import ImageCropper from "@/components/ImageCropper";
import { getCroppedImage } from "@/src/lib/cropImage";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface FormType {
  firstname: string;
  lastname: string;
  headshot: string;
  email: string;
  phonenumber: string;
  dayandSlot: string;
  date: string;
  duration: string;
  meetingType: string;
  meetingMedium: string;
  meetingAgendas: string;
  message: string;
}

const inputStyle =
  "w-full mt-1 outline-none bg-white shadow-[#CBD0DB2E] shadow-xl p-2 border-[#EAEAEA] border rounded mb-4";
const fileinputStyle =
  "w-full file:bg-[#383838] file:text-white file:mr-3 file:hover:bg-[#383100] file:active:bg-[#606060] file:px-2 file:rounded-md file:cursor-pointer pointer-events-auto mt-1 outline-none bg-white shadow-[#CBD0DB2E] shadow-xl p-2 border-[#EAEAEA] border rounded mb-4";
const labelStyle = "text-sm font-medium";

const BookMeeting = () => {
  const [crop, setCrop] = useState(false);
  const [cropData, setCropData] = useState<any>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [dots, setDots] = useState("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const [form, setForm] = useState<FormType>({
    firstname: "",
    lastname: "",
    headshot: "",
    email: "",
    phonenumber: "",
    dayandSlot: "",
    date: "",
    duration: "",
    meetingType: "",
    meetingMedium: "",
    meetingAgendas: "",
    message: "",
  });

  const dayslot = ["Morning", "Afternoon", "Evening", "Other"];
  const Duration = [
    "15 Minutes",
    "30 Minutes",
    "45 Minutes",
    "1 Hour",
    "2 Hours",
    "5 Hours",
    "10 AM to 5 PM",
    "Whole Day",
  ];
  const meetingType = [
    "Official",
    "Business Deal",
    "Pitching",
    "Interview",
    "Presentation",
    "Personal",
    "Consulting",
    "Other",
  ];
  const meetingMedium = ["In Person", "Virtual"];

  const onClose = () => setCrop(false);

  const getFileUrl = async (file: File) => {
    console.log("Uploading file...");

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
    console.log(data.secure_url)
    return data.secure_url;
  };

  // HANDLE CROPPED IMAGE
  const handleSave = async () => {
    if (!imageFile) {
      console.error("Invalid image for cropping:", imageFile);
      return;
    }
    if (!cropData) {
      console.error("Missing crop data");
      return;
    }

    const croppedBlob = await getCroppedImage(imageFile, cropData);

    // Convert Blob → File for Cloudinary
    const croppedFile = new File([croppedBlob], imageFile.name, {
      type: imageFile.type,
    });

    const uploadedUrl = await getFileUrl(croppedFile);
    setForm({ ...form, headshot: uploadedUrl });
    setCrop(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (error || !form.headshot) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/booking-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        console.error(data.error);
        alert("Failed to submit form: " + data.error);
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // DOTS FOR SUBMIT BUTTON
  useEffect(() => {
    if (!isSubmitting) {
      setDots("");
      return;
    }
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);
    return () => clearInterval(interval);
  }, [isSubmitting]);

  // DATE VALIDATION
  useEffect(() => {
    if (!form.date) return;
    const inputDate = new Date(form.date);
    const today = new Date();
    if (inputDate < today) setError(true);
    else setError(false);
  }, [form.date]);

  // RENDER HELPERS
  const renderInput = (
    id: keyof FormType,
    label: string,
    type: "text" | "email" | "dateTime-local" | "url" | "file" = "text"
  ) => (
    <div key={id}>
      <label htmlFor={id} className={labelStyle}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        accept={type === "file" ? ".png,.jpg,.jpeg,.webp" : "*"}
        required
        onChange={handleChange}
        placeholder={`Enter ${label.toLowerCase()}`}
        className={type === "file" ? fileinputStyle : inputStyle}
      />
    </div>
  );

  const renderSelect = (
    id: keyof FormType,
    label: string,
    options: string[]
  ) => (
    <div key={id}>
      <label htmlFor={id} className={labelStyle}>
        {label}
      </label>
      <select id={id} required onChange={handleChange} className={inputStyle}>
        <option value="">Select</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );

  const renderphoneInput = (id: keyof FormType, label: string) => (
    <div className="block mt-1">
      <label htmlFor={id} className={`${labelStyle} block mb-1`}>
        {label}
      </label>
      <PhoneInput
        country={"np"}
        value={form.phonenumber}
        onChange={(phone) => setForm({ ...form, phonenumber: phone })}
        inputProps={{ name: "phone", required: true, autoFocus: false }}
        inputStyle={{
          width: "100%",
          height: "40px",
          paddingLeft: "48px",
          fontSize: "16px",
          borderBlockColor: "#e1e1e1",
        }}
        placeholder="+977 98XXXXXXXX"
        enableSearch
        disableDropdown={false}
        countryCodeEditable={false}
      />
    </div>
  );

  // FILE INPUT FOR CROPPING
  const handleFileInput = (file: File | undefined) => {
    if (!file) return;
    setImageFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setCrop(true);
  };

  // CLEANUP PREVIEW URL
  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  return (
    <>
      <section className="max-w-295 mx-auto p-4 md:px-0">
        {submitted && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="text-white bg-[#055d59] rounded-lg p-5 w-[90%] max-w-md text-center shadow-xl">
              <h2 className="text-xl font-semibold mb-3">
                Meeting Booked Successfully
              </h2>
              <p className=" mb-5">
                Thank you! Your meeting has been booked successfully.
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
        <h1 className="text-3xl font-bold mb-4">IT Meeting</h1>
        <p className="text-sm mb-2"> We prioritize understanding your unique requirements, delivering personalized solutions that align with your goals, and maintaining high levels of security to protect your data. </p> 
        <p className="text-sm mb-2"> Whether you’re a startup, an established business, or a government entity, our focus on excellence and customer satisfaction makes us the IT partner you can trust. </p> 
        <p className="text-red-950">- All fields are required</p> 
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {renderInput("firstname", "First Name", "text")}
            {renderInput("lastname", "Last Name", "text")}
            <div>
              <label className={labelStyle}>Headshot</label>
              <input
                type="file"
                accept=".png,.jpg,.jpeg,.webp"
                required
                onChange={(e) => handleFileInput(e.target.files?.[0])}
                className={fileinputStyle}
              />
            </div>
            {renderInput("email", "Email", "email")}
            {renderphoneInput("phonenumber", "Phone Number")}
            {renderSelect("dayandSlot", "Select Days & Slots", dayslot)}
            <div className="grid gap-2 grid-cols-4 items-end relative">
              <div className="col-span-3">
                {renderInput("date", "Date of an Appointment", "dateTime-local")}
              </div>
              <div className="col-span-1">
                <h1 className="w-full mt-1 outline-none bg-white shadow-[#CBD0DB2E] shadow-xl p-2 border-[#EAEAEA] border rounded mb-4">
                  UTC + 2
                </h1>
              </div>
              {error && (
                <span className="absolute -bottom-1 text-sm text-red-500">
                  Date cannot be earlier than minimum!
                </span>
              )}
            </div>
            {renderSelect("duration", "Duration", Duration)}
            {renderSelect("meetingType", "Meeting Type / Mode", meetingType)}
            {renderSelect("meetingMedium", "Meeting Medium", meetingMedium)}
            {renderInput("meetingAgendas", "Meeting Agendas", "text")}
            {renderInput("message", "Message", "text")}
          </div>

          <div className="w-full flex justify-center mt-10 mb-16">
            <button
              type="submit"
              className="py-2 cursor-pointer px-10 text-white font-extrabold bg-[#383838] rounded-sm hover:bg-[#555]"
            >
              {isSubmitting ? `Booking${dots}` : "Book"}
            </button>
          </div>
        </form>
      </section>

      {/* IMAGE CROPPER */}
      {previewUrl && crop && (
        <ImageCropper
          type="round"
          image={previewUrl}
          onCropComplete={setCropData}
          handleSave={handleSave}
          onClose={onClose}
        />
      )}
    </>
  );
};

export default BookMeeting;
