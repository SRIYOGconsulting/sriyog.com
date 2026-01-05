import { NextResponse } from "next/server";

type Option = {
    label:string,
    value:string
}
export async function POST(req: Request) {
  try {
    const form = await req.json();

    const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Internship`;

    const fields = {
      "First Name": form.firstName,
      "Last Name": form.lastName,
      "City" : form.city,
      "Country": form.country,
      "Phone Number": form.phone,
      Email: form.email,
      "Emergency Contact Person": form.emergencyContact,
      "Emergency Phone Number": form.emergencyPhone,
      "Relation": form.relation,
      "Name of College / Campus":form.college,
      "Interested In":form.interest,
      "Highest Education":form.education,
      "Current Semester / Passed Year":form.semesterYear,
      "Expertise / Interest": form.interests.map((opt:Option) => opt.value),
      "Gender" : form.gender,
      "Internship Period":form.period,
      "Internship Subject":form.course,
      "Virtual Interview Slot":form.interviewSlot,
      "Internship Type": form.type,
      "CV/Resume": [{
            url: form.cv,
            filename: `${form.firstname} cv`
      }],
      "Cover Letter": [{
            url: form.coverletter,
            filename: `${form.firstname} cover letter`
      }],
      "Headshot": [{
            url: form.headshot,
            filename: `${form.firstname} headshot`
      }],
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
