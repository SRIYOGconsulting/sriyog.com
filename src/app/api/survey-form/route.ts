import { NextResponse } from "next/server";

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
        "Municipality": form.municipality,
        "Owner Phone Number": form.headContact,
        "Owner Email": form.headEmail,
        "Organisation Type": form.orgType,
        "URL": form.website,
        "URL Address": form.officialEmail,
        "Website Development Date": form.websiteCreated,
        "Website Redesign": form.websiteRedesignPlan,
        "CMS in Website": form.cms,
        "Need of Website": form.websiteNecessity,
        "Website Regular Update": form.websiteUpdateFrequency,
        "Benefit due to Website": form.websiteBenefitLevel,
        "Website Satisfaction": form.websiteSatisfaction,
        "Website CMS Update": form.selfUpdateCapability,
        "Website Update Person": form.selfUpdateCapability,
        "Website Admin Dashboard": form.adminDashboardFeatures.join(", "),
        "Website Redesign/ Update": form.websiteChangeType,
        "Google Search Optimization": form.seoPriority,
        "Facebook Page": form.hasFacebookPage,
        "FB Admin": form.facebookAdminCount,
        "Facebook Update": form.facebookUpdateStatus,
        "Page Likes": form.facebookLikes,
        "Promotional Activities": form.advertisingMediums.join(", "),
        "IT Promotion": form.promotionServicesNeeded.join(", "),
        "FB/Insta Marketing": form.socialMediaMarketingImportance,
        "Product Branding": form.brandingPriority,
        "Google My Business": form.googleMyBusiness,
        "Business Promotion": form.digitalMarketingImpact,
        "Cloud Backup": form.needsCloudBackup,
        "IT Issues": form.facesITIssues,
        "Training": form.needsITTraining,
        "Firewall": form.usesHardwareFirewall,
        "Software Management": form.hasITManagementSystem,
        "Trello": form.trelloAwareness,
        "IT Consultancy": form.lookingForITServices,
        "Regular App": form.regularAppsUsed.join(", "),
        "Cloud Services": form.servicesUsed.join(", "),
        "CCTV Camera": form.hasCCTV,
        "Attendance Machine": form.usesBiometricSystem,
        "Number of Computers": form.numberOfComputers,
        "Social Media Issues": form.socialMediaRiskAwareness,
        "Employee Monitoring": form.monitorsEmployeeActivities,
        "Update Crash": form.computerCrashOutcome,
        "Cloud Storage": form.maintainsCloudBackup,
        "Social Media Optimization": form.hasSocialMediaTeam,
        "Data Banking": form.importantDataStorage,
        "Cyber Attack": form.hasCyberAttackPrevention,
        "Support Desk": form.hasCustomerSupportDesk,
        "Data Safety": form.cloudSecurityAwareness,
        "Genuine Windows": form.usesLicensedWindows,
        "Budget": form.monthlyITBudget,
        "Select Services": form.technologyFriendlyServices.join(", "),
        "IT Service Professional": form.neededITProfessionals.join(", "),
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
