import { NextApiRequest, NextApiResponse } from "next";
type ResponseData = { success: boolean; error?: string; };

export default async function handler(req: NextApiRequest, res:NextApiResponse<ResponseData>) {
  if (req.method !== "POST") return res.status(405).json({ success: false });

  try {
    const form = req.body;

    const url = `https://api.airtable.com/v0/appcRLi3R3qIFyPIU/Contact?maxRecords=3&view=Grid%20view`
    console.log("Form data:", form);
    const fields = {
      "First Name": form.firstname,
      "Last Name": form.lastname,
      Email: form.email,
      "Country Code": form.countrycode,
      Phone: form.phoneNumber,
      Extension: form.extension,
      "What do you need help with?": form.help,
      Message: form.message,
    };
    
    const airtableRes = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ records: [{ fields }] }),
    });

    const data = await airtableRes.json();

    if (!airtableRes.ok) {
      console.error("Airtable error:", data);
      return res.status(500).json({ success: false, error: data.error?.message });
    }

    return res.status(200).json({ success: true });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: err.message });
  }
}
