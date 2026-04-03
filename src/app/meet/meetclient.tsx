"use client";

import { useState } from "react";
import Ribbon from "@/components/Ribbon";
import Image from "next/image";
import Link from "next/link";

/* ================= TIMEZONES ================= */
const TIMEZONES = [
  { label: "GMT+1", offset: 1 },
  { label: "GMT+2", offset: 2 },
  { label: "GMT+3", offset: 3 },
  { label: "GMT+4", offset: 4 },
  { label: "GMT+5", offset: 5 },
  { label: "GMT+5:45", offset: 5.75 },
  { label: "GMT+6", offset: 6 },
  { label: "GMT+7", offset: 7 },
  { label: "GMT+8", offset: 8 },
  { label: "GMT+9", offset: 9 },
  { label: "GMT+10", offset: 10 }
];

/* ================= TIME CONVERTER (PURE 24H) ================= */
const convertTime = (
  timeRange: string,
  fromOffset: number,
  toOffset: number
) => {
  const diffMinutes = (toOffset - fromOffset) * 60;

  return timeRange.replace(/(\d{2}):(\d{2})/g, (_, h, m) => {
    let hour = parseInt(h, 10);
    let minute = parseInt(m, 10);

    let totalMinutes = hour * 60 + minute + diffMinutes;
    totalMinutes = ((totalMinutes % 1440) + 1440) % 1440;

    const newHour = Math.floor(totalMinutes / 60);
    const newMinute = totalMinutes % 60;

    return `${String(newHour).padStart(2, "0")}:${String(
      newMinute
    ).padStart(2, "0")}`;
  });
};

export default function MeetClient() {
  const [selectedTZ, setSelectedTZ] = useState(TIMEZONES[2]); // GMT+3

  const fullSchedule: {
    [day: string]: { time: string; title: string; link: string }[];
  } = {
    "Virtual Meetings - TimeZone GMT+3 (Buffer Time : 15 Minutes)": [
      { time: "08:15 – 02:15 - Host : CTO", title: "Meeting with CTO - ( Sun - Thu )", link: "https://cal.com/pracas" },
      { time: "08:15 – 11:15 - Host : BroadPress", title: "Internship Slot 1 - (Sun-Thu)", link: "https://d.sriyog.com/morning" },
      { time: "12:15 – 15:15 - Host : BroadPress", title: "Internship Slot 2 - (Sun-Thu)", link: "https://d.sriyog.com/afternoon" },
      { time: "12:45 – 13:30 - Host : BiratInfo", title: "Digital Journalism Training - (Sun-Thu)", link: "https://meet.google.com/drz-rdcb-rfa" },
      { time: "12:15 – 15:15 - Host : SRIYOG", title: "ai Academy - (Sun-Thu)", link: "https://meet.google.com/hjn-jwzy-sna" },
      { time: "12:15 – 15:15 - Host : BroadPress", title: "UI/UX Training - (Sun-Thu)", link: "meet.google.com/uhp-wfzm-awa" },
      { time: "12:15 – 13:00 - Host : BroadPress", title: "FullStack Academy - (Sun-Thu)", link: "meet.google.com/mmo-uzpj-qnp" },
      { time: "10:30 – 11:15 - Host : CTO", title: "#TechFriday - (Fri)", link: "https://meet.google.com/tat-vvcq-pzu" },
      
    ],
  };

  return (
    <>
      <Ribbon name="Meet" des="" />

      <section className="max-w-[1180px] mx-auto px-6 lg:px-0 mb-[45px] mt-[45px] w-full flex flex-col gap-6">
        {Object.entries(fullSchedule).map(([day, sessions]) => (
          <div
            key={day}
            className="relative w-full bg-white border border-gray-200 rounded-[15px] shadow p-4 mt-12"
          >
            {/* ========= TIMEZONE DROPDOWN ========= */}
            <div className="absolute top-10 right-10 z-10">
              <select
                value={selectedTZ.label}
                onChange={(e) =>
                  setSelectedTZ(
                    TIMEZONES.find(
                      (tz) => tz.label === e.target.value
                    )!
                  )
                }
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white"
              >
                {TIMEZONES.map((tz) => (
                  <option key={tz.label} value={tz.label}>
                    {tz.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-start flex-col sm:flex-row sm:items-center gap-4 mb-4">
              <Image
                src="/meet/meet.jpg"
                width={250}
                height={250}
                alt={day}
                className="rounded-[12px] border border-gray-400"
              />
              <h2 className="text-xl font-bold">
                Virtual Meetings – {selectedTZ.label} (Buffer Time : 15 Minutes)
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {sessions.map((session, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between border-b py-2"
                >
                  <div>
                    <p className="font-semibold">{session.title}</p>
                    <p className="text-sm text-gray-500">
                      {convertTime(session.time, 3, selectedTZ.offset)}
                    </p>
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

        <p className="max-w-[95%] mx-auto text-center mb-[45px]">
          <br />
          Meeting Rules : Learn Google Meet basics in YouTube. All participants must use a professional headshot and
          display their real name as per their government ID. Keep your microphone
          muted unless invited to speak, and use the “Raise Hand” feature before
          contributing. English is the only language allowed during the session. 
        </p>

        <p className="max-w-[95%] mx-auto text-center mb-[45px]">
          With Effective From : 5 April 2026, Saturday
        </p>
      </section>
    </>
  );
}