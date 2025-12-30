function getTimeFormat(isoString: string): string {
  const date = new Date(isoString);

  const parts = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find(p => p.type === type)?.value ?? "";

  return `${get("month")} ${get("day")}, ${get("year")} ${get("hour")}:${get("minute")}`;
}

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const form = await req.json();

    const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Book-a-Meeting`;

    const fields = {
        "First Name": form.firstname,
        "Last Name": form.lastname,
        "Headshot": [
            {
                url: form.headshot,
                filename: `${form.firstname.jpg}`
            }
            ],
        "eMail": form.email,
        "Phone": form.phonenumber,
        "Duration":form.duration,
        "Date of an Appointment": getTimeFormat(form.date),
        "Slot":form.dayandSlot,
        "Meeting Type / Mode": form.meetingType,
        "Meeting Medium": form.meetingMedium,
        "Message": form.message,
        "Meeting Agendas": form.meetingAgendas,
    }
    console.log(getTimeFormat(form.date))
    const airtableRes = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [{ fields }],
      }),
    });

    const data = await airtableRes.json();

    if (!airtableRes.ok) {
      console.error("Airtable error:", data);
      return NextResponse.json(
        { success: false, error: data.error?.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Details submitted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Server error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

