import { NextResponse } from "next/server";

type Option = {
    label:string,
    value:string
}
export async function POST(req: Request) {
  try {
    const form = await req.json();

    const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Career`;

    const fields = {
      "First Name": form.firstName,
      "Last Name": form.lastName,
      "Marital Status": form.maritalStatus,
      "City" : form.city,
      "Country": form.country.value,
      "Phone Number": form.phone,
      "Father's Name": form.fatherName,
      "Father's Phone Number":form.fatherPhone,
      Email: form.email,
      "Name of University":form.university,
      "Name of College / Campus":form.college,
      "Interested In":form.interest,
      "Highest Education":form.highestEducation,
      "Current Semester / Passed Year":form.currentStatus,
      "Top Skills": form.topSkills.map((opt:Option) => opt.value),
      "Gender" : form.gender,
      "Current Employment Status":form.employmentStatus,
      "Employment Type":form.employmentType,
      "Expected Monthly Salary":form.expectedSalary,
      "Duty Hours":form.dutyHours,
      "Driving License":form.hasLicense,
      "Personal Vehicle":form.hasVehicle,
      "Tech Skills":form.techSkills,
      "Soft Skills":form.softSkills,
      "Work Experience 1":form.workExperience1,
      "Work Experience 2":form.workExperience2,
      Hobbies:form.hobbies,
      "Languages Known":form.languages,
      "Github URL":form.github,
      "Portfolio URL":form.portfolio,
      "Reference 1":form.reference1,
      "Reference 2":form.reference2,
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
            filename: `${form.firstname}`
      }],
      "Citizenship": [{
            url: form.citizenship,
            filename: `${form.firstname} citizenship`
      }],
      "Academic Certificate": [{
            url: form.academicCertificate,
            filename: `${form.firstname} ac certificate`
      }],
      "Training Certificate": [{
            url: form.trainingCertificate,
            filename: `${form.firstname} tr certificate`
      }],
      "Volunteering Certificate": [{
            url: form.volunteeringCertificate,
            filename: `${form.firstname} vol certificate`
      }],
      "Internship Certificate" : [{
            url: form.internshipCertificate,
            filename: `${form.firstname} intern certificate`
      }],
      "Professional Summary" : form.careerObjective,
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
