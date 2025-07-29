import type { NextApiRequest, NextApiResponse } from "next";

interface PartnershipFormValues {
  organizationName: string;
  organizationEmail: string;
  website: string;
  city: string;
  country: string;
  personalName: string;
  personalEmail: string;
  designation: string;
  message: string;
  reason: string;
  phoneOrganization: string;
  personalPhone: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } = process.env;

  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
    return res.status(500).json({ error: "Missing Airtable credentials" });
  }

  try {
    const {
      organizationName,
      organizationEmail,
      website,
      city,
      country,
      personalName,
      personalEmail,
      designation,
      message,
      reason,
      phoneOrganization,
      personalPhone,
    }: PartnershipFormValues = req.body;

    const airtableRes = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Partnership`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            "Name of Organization": organizationName,
            Email: organizationEmail,
            "Phone Number": phoneOrganization,
            URL: website,
            City: city,
            Country: country,
            "Your Name": personalName,
            "Your Email": personalEmail,
            "Phone Number (Contact)": personalPhone,
            "Your Designation": designation,
            "Additional Message": message,
            "Why do you want to become a partner?": reason,
          },
        }),
      }
    );

    const contentType = airtableRes.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      const htmlError = await airtableRes.text();
      console.error("Non-JSON response from Airtable:\n", htmlError);
      return res
        .status(500)
        .json({ error: "Airtable returned non-JSON response" });
    }

    const result = await airtableRes.json();

    if (!airtableRes.ok) {
      console.error("Airtable error response:", result);
      return res
        .status(500)
        .json({ error: "Airtable API error", detail: result });
    }

    return res.status(200).json({ success: true, data: result });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("API route error:", err);
    return res.status(500).json({
      error: "Unexpected server error",
      detail: message,
    });
  }
}
