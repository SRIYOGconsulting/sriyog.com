import { NextResponse } from "next/server";

const formatDialCode = (code: string): string => {
  if (!code) return "";
  const digits = code.replace(/\D/g, "");
  return `(${digits})`;
};

function getDateFormat(isoString: string): string {
  const date = new Date(isoString);

  const parts = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).formatToParts(date);

  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find(p => p.type === type)?.value ?? null;

  return `${get("month")} ${get("day")}, ${get("year")}`;
}

const formatCustomNumber = (num: string) => {
  const digits = num
  if (digits.length <= 3) return digits;

  let result = "";
  let i = 0;

  result += digits.slice(i, i + 3);
  i += 3;

  while (i < digits.length) {
    const remaining = digits.length - i;

    if (remaining <= 2) {
      result += "-" + digits.slice(i);
      break;
    } else {
      result += "-" + digits.slice(i, i + 3);
      i += 3;
    }
  }

  return result;
};

type option = {
  label:string,
  value:string
}

export async function POST(req: Request) {
  try {
    const form = await req.json();

    const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Request-a-Quotation`;

    const fields = {
        "Name": form.contact,
        "Name of Organisation": form.name,
        "Address": form.address,
        "Phone Number": `${formatDialCode(form.code)} ${formatCustomNumber(form.phonenumber)}`,
        Email: form.email,
        "WhatsApp Number": form.WhatsApp,
        "Select a Service": form.service.map((opt:option) => opt.value),
        "Project Budget in NPR": form.budget,
        "Competitor 1 ": form.competitor,
        "Reference Website link ( URL )": form.reference,
        "Project Start Date": form.startDate ? getDateFormat(form.startDate) : null,
        "Project Ending Date": form.endDate ? getDateFormat(form.endDate) : null,
        "Scope of Work ": form.scope,
        "Preferred Technology Stack or Software Platforms ": form.technology,
        "Is your business on Profit?": form.business,
        "What's your monthly IT Budget ?": form.monthlyBudget,
        "Name of your existing IT Vendor": form.vendor,
        "Organization Registration Type": form.registration,
        "Type of Organisation": form.organizationType,
        "Industry Type": form.industry,
        "Organisation PAN/ VAT Number": form.panvat ? form.panvat : null,
        "Name of Referral Person": form.referralName,
        "Referral Phone Number": form.referralPhone,
        "How did you know about us ?": form.how,
        "Message": form.message,
        "Country": form.country,
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
