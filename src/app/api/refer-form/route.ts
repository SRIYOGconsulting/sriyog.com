import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const form = await req.json();

    const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Refer`;

    const fields = {
      "Full Name": form.fullName,
      Email: form.email,
      Phone: form.phone,
      "Organization / Company Name": form.organizationName,
      "Label" : form.designation,
      "Your Relationship to the Referred Client" : form.relation,
      "Client Name" : form.clientName,
      "Client Contact Person" : form.clientContact,
      "Client Email" : form.clientEmail,
      "Organization / Company Phone Number" : form.clientPhone,
      "Client Industry / Business Type" : form.clientBusinessType,
      "Reason of Referral" : form.reason,
      "Additional Notes (Optional)" : form.additionalNotes,
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
