import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const form = await req.json();

    const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Partnership`;

    const fields = {
      "Organization Name": form.organizationName,
      "Organization Email" : form.organizationEmail,
      "Country": form.country,
      "City" : form.city,
      "Landline Number": form.organizationPhone,
      "Website": form.website,
      "Designation" : form.designation,
      "Contact Person Name" : form.personalName,
      "Contact Person Email" : form.personalEmail,
      "Contact Person Phone" : form.personalPhone,
      "Message" : form.message,
      "Reason" : form.reason,
    };

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


export async function GET() {
  try {
    const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Partnership`;

    const airtableRes = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
      },
      // Important: prevent caching if data changes often
      cache: "no-store",
    });

    const data = await airtableRes.json();

    if (!airtableRes.ok) {
      return NextResponse.json(
        { success: false, error: data.error?.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, records: data.records },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
