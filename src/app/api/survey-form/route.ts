import { NextResponse } from "next/server";

type Option = {
  label:string,
  value:string,
}
export async function POST(req: Request) {
  try {
    const form = await req.json();

    const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/IT-Survey`;

    const fields = {
        "Name of Organisation": form.organizationName,
        "President/ Owner": form.orgHead,
        "Highest Education": form.qualification,
        "Established Date / Year": form.establishedYear,
        "Organisation Email": form.orgEmail,
        "Mobile Phone Number": form.mobile,
        "Contact Person": form.formFiller,
        "Ward": form.wardNumber,
        "Province": form.province,
        "District": form.district,
        "Municipal": form.municipality,
        "Owner Phone Number": form.headContact,
        "Owner Email": form.headEmail,
        "Organisation Type": form.orgType,
        "Website URL": form.website,
        "URL Address": form.officialEmail,
        "Website Development Date": form.websiteCreated,
        "Website Redesign": form.websiteRedesignPlan,
        "CMS in Website": form.cms,
        "Need of Website": form.websiteNecessity,
        "Website Update": form.websiteUpdateFrequency,
        "Website Benefit": form.websiteBenefitLevel,
        "Website Satisfaction": form.websiteSatisfaction,
        "Website CMS Update": "",
        "Website Update Person": form.selfUpdateCapability,
        "Website Admin Dashboard": form.adminDashboardFeatures.map((opt:Option) => opt.value),
        "Website Redesign/ Update": form.websiteChangeType,
        "Google Search": form.seoPriority,
        "Facebook Page": form.hasFacebookPage,
        "FB Admin": form.facebookAdminCount,
        "Facebook Update": form.facebookUpdateStatus,
        "Page Likes": form.facebookLikes,
        "Promotional Activities": form.advertisingMediums.map((opt:Option) => opt.value),
        "IT Promotion": form.promotionServicesNeeded.map((opt:Option) => opt.value),
        "FB/Insta Marketing": form.socialMediaMarketingImportance,
        "Product Branding": form.brandingPriority,
        "Google My Business": form.googleMyBusiness,
        "Digital Marketing Support Business Promotion": form.digitalMarketingImpact,
        "Need Cloud Backup": form.needsCloudBackup,
        "IT Issues": form.facesITIssues,
        "Need IT Training": form.needsITTraining,
        "Firewall": form.usesHardwareFirewall,
        "Software Management": form.hasITManagementSystem,
        "Trello Awareness": form.trelloAwareness,
        "IT Consultancy": form.lookingForITServices,
        "Regular App": form.regularAppsUsed.map((opt:Option) => opt.value),
        "Cloud Services": form.servicesUsed.map((opt:Option) => opt.value),
        "CCTV Camera": form.hasCCTV,
        "Attendance Machine": form.usesBiometricSystem,
        "Number of Computers": form.numberOfComputers,
        "Social Media Awareness": form.socialMediaRiskAwareness,
        "Employee Monitoring": form.monitorsEmployeeActivities,
        "Update Crash": form.computerCrashOutcome,
        "Cloud Storage": form.maintainsCloudBackup,
        "Social Media Team": form.hasSocialMediaTeam,
        "Data Banking": form.cloudSecurityAwareness,
        "Cyber Attack Prevention": form.hasCyberAttackPrevention,
        "Support Desk": form.hasCustomerSupportDesk,
        "Data Safety": form.importantDataStorage,
        "Genuine Windows": form.usesLicensedWindows,
        "Budget": form.monthlyITBudget,
        "Select Services": form.technologyFriendlyServices.join(", "),
        "IT Service Professional": form.neededITProfessionals.map((opt:Option) => opt.value),
        "Feedback": form.itIdeasQueries,
        "Comments": form.otherSuggestions,
        "Promotion": form.itPromotionThoughts,
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
