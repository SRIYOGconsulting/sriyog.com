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
  { label: "GMT+5:45", offset: 5.75 },
];

/* ================= TIME CONVERTER ================= */
const convertTime = (
  timeRange: string,
  fromOffset: number,
  toOffset: number
) => {
  const diff = toOffset - fromOffset;

  return timeRange.replace(
    /(\d{1,2}):(\d{2})\s?(AM|PM)/g,
    (_, h, m, period) => {
      let hour = parseInt(h, 10);
      const minute = parseInt(m, 10);

      if (period === "PM" && hour !== 12) hour += 12;
      if (period === "AM" && hour === 12) hour = 0;

      const totalMinutes = hour * 60 + minute + diff * 60;
      let newHour = Math.floor(((totalMinutes % 1440) + 1440) % 1440 / 60);
      let newMinute = Math.round(((totalMinutes % 60) + 60) % 60);

      const newPeriod = newHour >= 12 ? "PM" : "AM";
      if (newHour === 0) newHour = 12;
      else if (newHour > 12) newHour -= 12;

      return `${newHour}:${String(newMinute).padStart(2, "0")} ${newPeriod}`;
    }
  );
};

export default function MeetClient() {
  const [selectedTZ, setSelectedTZ] = useState(TIMEZONES[2]); // GMT+3

  const fullSchedule: {
    [day: string]: { time: string; title: string; link: string }[];
  } = {
    "Virtual Meetings - TimeZone GMT+3 (Buffer Time : 15 Minutes)": [
      { time: "10:30 AM – 11:15 AM - Host : CTO", title: "Community Meeting - (Sun)", link: "https://meet.google.com/fuu-fsjz-yhj" },
      { time: "8:15 AM – 11:15 AM - Host : BroadPress", title: "Morning Session - (Sun-Fri)", link: "https://meet.google.com/stw-suqx-nbw" },
      { time: "12:15 PM – 3:15 PM - Host : BroadPress", title: "Afternoon Session - (Sun-Fri)", link: "https://meet.google.com/gue-iohz-pdq" },
      { time: "4:15 PM – 7:15 PM - Host : BroadPress", title: "Evening Session - (Sun-Fri)", link: "https://meet.google.com/ndu-ffpw-oiv" },
      { time: "12:15 PM – 2:15 PM - Host : CEO", title: "Interview - (Sun-Thurs)", link: "https://meet.google.com/vsb-buwu-pub" },
      { time: "4:15 PM – 5:00 PM - Host : BroadPress", title: "BroadMeet - (Sun)", link: "https://meet.google.com/arm-rudj-mpt" },
      { time: "10:30 AM – 11:15 AM - Host : CTO", title: "#TechFriday - (Fri)", link: "https://meet.google.com/tat-vvcq-pzu" },
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
            className="relative w-full bg-white border border-gray-200 rounded-[15px] shadow p-4 mt-12"
          >
            {/* ========= TIMEZONE DROPDOWN (TOP RIGHT) ========= */}
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
                src="/assets/images/meet/meet.jpg"
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
          Meeting Rules : All participants must use a professional headshot and
          display their real name as per their government ID. Keep your microphone
          muted unless invited to speak, and use the “Raise Hand” feature before
          contributing. English is the only language allowed during the session.
        </p>

        <p className="max-w-[95%] mx-auto text-center mb-[45px]">
          With Effective From : 9 November 2025, Sunday
        </p>
      </section>
    </>
  );
}
