import Ribbon from "@/components/Ribbon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | SRIYOG Consulting",
  description: "Read the disclaimer for SRIYOG Consulting's services and policies.",
  openGraph: {
    title: "Disclaimer | SRIYOG Consulting",
    description: "Read the disclaimer for SRIYOG Consulting's services and policies.",
    url: "https://www.sriyog.com/disclaimer",
    images: [
      {
        url: "https://sriyog.com/og/default.jpg",
        alt: "Disclaimer",
      },
    ],
  },
};

const Disclaimer = () => {
  return (
    <>
      <Ribbon name="Disclaimer" des="" />
      <section className="mb-[45px] mx-auto max-lg:container max-lg:px-3 lg:w-[1180px] max-md:shadow-none border max-md:border-none border-[#dbdbdb]">
        <div className="p-[55px] max-md:p-0">
          <p className="mb-[15px] text-[18px]">
            Effective Date: 1<sup>st</sup>&nbsp;June, 2025
          </p>

          <p className="mb-[10px]">
            SRIYOG Consulting Pvt. Ltd. (also referred to as “us”, “we”, or “our”)
            operates the www.sriyog.com website and related digital platforms
            (the “Service”). This Disclaimer explains our policies regarding the
            collection, use, and disclosure of personal information while using
            our Service.
          </p>

          <p className="mb-[56px] max-md:mb-[20px]">
            By using SRIYOG Consulting services, you acknowledge that you have
            read, understood, and agreed to the collection and use of
            information in accordance with this policy.
          </p>

          <p className="text-[1.4rem] font-bold mb-[10px]">
            Collection and Use of Information
          </p>
          <p className="mb-[56px] max-md:mb-[20px]">
            We collect different types of information for various purposes to
            provide and improve our services, user experience, and business
            operations.
          </p>

          <p className="text-[1.4rem] font-bold mb-[10px]">
            Types of Data Collected
          </p>

          <p className="mb-[10px] font-semibold">Personal Information</p>
          <p className="mb-[10px]">
            When you create a profile or interact with our services, we may
            collect personally identifiable information including, but not
            limited to:
          </p>
          <ul className="list-disc pl-6 mb-[56px] max-md:mb-[20px]">
            <li>Mobile number</li>
            <li>Email address</li>
            <li>First and last name</li>
            <li>Address, province, city</li>
            <li>Skills and expertise</li>
            <li>Cookies and usage data</li>
          </ul>

          <p className="mb-[10px] font-semibold">Usage Data</p>
          <p className="mb-[56px] max-md:mb-[20px]">
            We may collect information such as IP address, browser type,
            visited pages, time spent on pages, device identifiers, and other
            diagnostic data to analyze service usage and performance.
          </p>

          <p className="mb-[10px] font-semibold">Cookies and Tracking</p>
          <p className="mb-[10px]">
            Cookies are small files stored on your device to track activity and
            preferences. You may choose to disable cookies through your browser
            settings; however, some features of the Service may not function
            properly.
          </p>

          <ul className="list-disc pl-6 mb-[56px] max-md:mb-[20px]">
            <li>
              <strong>Session Cookies:</strong> Required for service operation
            </li>
            <li>
              <strong>Preference Cookies:</strong> Store user preferences
            </li>
            <li>
              <strong>Security Cookies:</strong> Used for security purposes
            </li>
          </ul>

          <p className="text-[1.4rem] font-bold mb-[10px]">Use of Data</p>
          <ul className="list-disc pl-6 mb-[56px] max-md:mb-[20px]">
            <li>To provide and maintain our services</li>
            <li>To notify users about service updates</li>
            <li>To provide customer support</li>
            <li>To monitor service usage and performance</li>
            <li>To detect and prevent technical issues</li>
          </ul>

          <p className="text-[1.4rem] font-bold mb-[10px]">Data Transfer</p>
          <p className="mb-[56px] max-md:mb-[20px]">
            Your information may be stored and processed on servers located in
            Nepal. By using our services, you consent to the transfer and
            processing of your data in accordance with this Disclaimer.
          </p>

          <p className="text-[1.4rem] font-bold mb-[10px]">
            Disclosure of Information
          </p>
          <p className="mb-[10px]">
            We may disclose your information when required to comply with legal
            obligations, protect company rights, prevent wrongdoing, or ensure
            user safety.
          </p>

          <p className="mb-[56px] max-md:mb-[20px]">
            We do not sell or rent your personal information to third parties.
          </p>

          <p className="text-[1.4rem] font-bold mb-[10px]">Data Security</p>
          <p className="mb-[56px] max-md:mb-[20px]">
            While we take commercially reasonable steps to protect your data,
            no method of transmission over the Internet or electronic storage
            is completely secure.
          </p>

          <p className="text-[1.4rem] font-bold mb-[10px]">
            Third-Party Service Providers
          </p>
          <p className="mb-[56px] max-md:mb-[20px]">
            We may engage trusted third-party providers to assist in delivering
            our services. These parties are contractually obligated to protect
            your information and use it only for service-related purposes.
          </p>

          <p className="text-[1.4rem] font-bold mb-[10px]">
            Children’s Privacy
          </p>
          <p className="mb-[56px] max-md:mb-[20px]">
            Our services are not intended for individuals under the age of 18.
            If we become aware that we have collected personal data from a
            minor, we will take immediate steps to delete such information.
          </p>

          <p className="text-[1.4rem] font-bold mb-[10px]">
            Changes to This Disclaimer
          </p>
          <p className="mb-[56px] max-md:mb-[20px]">
            We reserve the right to update this Disclaimer at any time. Changes
            will be posted on this page along with an updated effective date.
          </p>

          <p className="text-[1.4rem] font-bold mb-[10px]">Contact Us</p>
          <p>
            If you have any questions regarding this Disclaimer, please contact
            us at:&nbsp;
            <a
              href="mailto:info@sriyog.com"
              className="text-primary underline"
            >
              info@sriyog.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Disclaimer;
