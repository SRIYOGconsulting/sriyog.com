import Ribbon from "@/components/Ribbon";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Join Virtual Meeting | SRIYOG Consulting",
  description: "Join our virtual meetings and discussions at SRIYOG Consulting.",
  openGraph: {
    title: "Join Virtual Meeting | SRIYOG Consulting",
    description: "Join our virtual meetings and discussions at SRIYOG Consulting.",
    url: "https://www.sriyog.com/meet",
    images: [
      {
        url: "https://sriyog.com/assets/images/og/default.jpg",
        alt: "Join Virtual Meeting",
      },
    ],
  },
};

export default function MeetPage() {
  // Each link can be customized as needed
  const fullSchedule: {
    [day: string]: { time: string; title: string; link: string }[];
  } = {
    "Virtual Meetings - TimeZone GMT+3 (Buffer Time : 15 Minutes)": 
    
    [
    { time: "10:30 AM – 11:30 AM - Host : PRACAS", title: "Community Meeting - (Sun)", link: "https://meet.google.com/fuu-fsjz-yhj" },
    { time: "8:15 AM – 11:15 AM - Host : BroadPress", title: "Morning Internship - (Mon-Thurs)", link: "https://meet.google.com/stw-suqx-nbw" },
    { time: "12:15 PM – 3:15 PM - Host : BroadPress", title: "Afternoon Internship - (Mon-Thurs)", link: "https://meet.google.com/gue-iohz-pdq" },
    { time: "4:15 PM – 7:15 PM - Host : BroadPress", title: "Evening Internship - (Mon-Thurs)", link: "https://meet.google.com/ndu-ffpw-oiv" },
    { time: "12:15 PM – 2:15 PM - Host : Bikram", title: "Interview - (Sat/ Sun)", link: "https://meet.google.com/vsb-buwu-pub" },
    { time: "4:15 PM – 5:00 PM - Host : BroadPress", title: "BroadMeet - (Sun)", link: "https://meet.google.com/arm-rudj-mpt" },
    { time: "10:30 AM – 11:15 AM - Host : PRACAS", title: "#TechFriday - (Fri)", link: "https://meet.google.com/tat-vvcq-pzu" },
    { time: "12:15 PM – 1:00 PM - Host : BroadPress", title: "BroadPress Showcase - (Fri)", link: "https://meet.google.com/xyk-cbam-nzn" },
    ],
    
  };

  

  return (
    <>
      <Ribbon name="Meet" des="" />
      <section className="max-w-[1180px] mx-auto px-6 lg:px-0 mb-[45px] mt-[45px] w-full flex flex-col gap-6">
        {Object.entries(fullSchedule).map(([day, sessions]) => (
          <div
            key={day}
            className="w-full bg-white border border-gray-200 rounded-[15px] shadow p-4 mt-12"
          >
            <div className="flex items-start flex-col sm:flex-row sm:items-center gap-4 mb-4">
              <Image
                src="/assets/images/meet/meet.jpg"
                width={250}
                height={250}
                alt={day}
                className="rounded-[12px] border border-gray-400"
              />
              <h2 className="text-xl font-bold">{day}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {sessions.map((session, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between border-b py-2"
                >
                  <div>
                    <p className="font-semibold">{session.title}</p>
                    <p className="text-sm text-gray-500">{session.time}</p>
                  </div>
                  <Link
                    href={session.link}
                    target="_blank"
                    className="px-3 py-1 text-sm border border-[#055D59] text-[#055D59] hover:bg-[#055D59] hover:text-white rounded-[8px] transition"
                  >
                    Join
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}

        <p className="max-w-[95%] mx-auto text-center mb-[45px]"><br></br>
          Meeting Rules : All participants must use a professional headshot and display their real name as per their government ID. Keep your microphone muted unless invited to speak, and use the “Raise Hand” feature before contributing. Please familiarize yourself with Google Meet if you are new to the platform. English is the only language allowed during the session. Sharing unauthorized links is strictly prohibited and may result in removal or a permanent ban.
        </p>
      
          <p className="max-w-[95%] mx-auto text-center mb-[45px]">
          Note : Countries that observe GMT+3 year-round include Bahrain, Belarus, Comoros, Djibouti, Eritrea, Ethiopia, Iraq, Kenya, Kuwait, Madagascar, Mayotte, Qatar, western Russia (Moscow and St. Petersburg), Saudi Arabia, Somalia, South Sudan, Sudan, Syria (since stopping DST), Tanzania, Turkey (permanently since 2016), Uganda, and Yemen. Meanwhile, several countries such as Cyprus, Estonia, Finland, Greece, Israel, Jordan, Latvia, Lebanon, Lithuania, Moldova, Romania, Syria (when DST is observed), and Ukraine (excluding occupied regions) use GMT+3 only during daylight saving time, typically advancing from GMT+2 in summer. This time zone is known as Arabian Standard Time (AST) in the Middle East and East Africa Time (EAT) in Africa.
        </p>
        <p className="max-w-[95%] mx-auto text-center mb-[45px]">With Effective From : 9 October 2025, Thursday</p>
      </section>

      
    </>
  );
}
