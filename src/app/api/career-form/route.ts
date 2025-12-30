import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const form = await req.json();

    const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Career`;

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
        "Slot":form.dayandSlot,
        "Meeting Type / Mode": form.meetingType,
        "Meeting Medium": form.meetingMedium,
        "Message": form.message,
        "Meeting Agendas": form.meetingAgendas,
    }

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

