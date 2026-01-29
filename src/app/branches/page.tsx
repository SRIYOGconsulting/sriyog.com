import Ribbon from "@/components/Ribbon";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const branches = [
  {
    id: 1,
    title: "Dubai",
    country: "United Arab Emirates",
    tagline: "IT Consulting Company in Dubai",
    description:
      "We Are Looking For An IT Service Providers Working As IT Support/ Hardware Maintenance/ Networking/ Website Development/ Digital Marketing Agencies And Professional Working As An IT Educator, IT Students, Aspiring Startup Founder, Startup Working In Healthcare, Employment & Tourism To Start A New Venture Or To Become A Part Of The Digital Revolution.",
    path: "https://www.sriyog.com",
  },
  {
    id: 2,
    title: "Sydney",
    country: "Australia",
    tagline: "IT Consulting Company in Australia",
    description:
      "We are expanding our technology consulting and digital infrastructure services across Australia, supporting businesses, institutions, and startups with scalable IT solutions.",
    path: "https://www.sriyog.com",
  },
  {
    id: 3,
    title: "Moscow",
    country: "Russia",
    tagline: "IT Consulting Company in Russia",
    description:
      "Our Moscow branch focuses on enterprise software, secure systems, and digital modernization for organizations operating at scale.",
    path: "https://www.sriyog.com",
  },
  {
    id: 7,
    title: "New Delhi",
    country: "India",
    tagline: "IT Consulting Company in India",
    description:
      "Delivering academic platforms, enterprise IT services, and digital transformation for institutions and businesses across India.",
    path: "https://www.sriyog.com",
  },
  {
    id: 8,
    title: "Hyderabad",
    country: "India",
    tagline: "Healthcare IT & Digital Solutions",
    description:
      "Specialized in healthcare IT, secure systems, and web platforms to improve operational efficiency.",
    path: "https://www.sriyog.com",
  },
  {
    id: 9,
    title: "Bangalore",
    country: "India",
    tagline: "Technology & Innovation Hub",
    description:
      "Focused on software development, cloud services, and digital transformation for startups and enterprises.",
    path: "https://www.sriyog.com",
  },
];


export const metadata: Metadata = {
  title: "Branches | SRIYOG Consulting",
  description: "Explore the branches of SRIYOG Consulting.",
  openGraph: {
    title: "Branches | SRIYOG Consulting",
    description: "Explore the branches of SRIYOG Consulting.",
    url: "https://www.sriyog.com/branches",
    images: [
      {
        url: "https://sriyog.com/og/default.jpg",
        alt: "Branches"
      }
    ]
  }
};

export default function Page() {
  return (
    <>
      <Ribbon name="Our Branches" des="" />
      <section className="lg:w-[1180px] max-lg:container max-lg:px-3 mx-auto mb-[45px]">
        <p className="max-w-[800px] mx-auto text-center mb-[45px]">
          SRIYOG Consulting operates across multiple international locations to
          support businesses with reliable IT solutions, digital transformation,
          and long-term technology strategies. Each branch is equipped with local
          expertise backed by our global standards.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-between gap-10">
{branches.map((item, idx) => (
  <div
    key={item.id}
    className="bg-white rounded-xl border border-[#e5e5e5] shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col justify-between"
  >
    {/* Top meta */}
    <div>
      <p className="text-sm font-semibold text-black mb-2">
        Total DropZone : 1
      </p>

      <p className="text-sm text-gray-400 mb-6">
        {item.tagline}
      </p>

      {/* City */}
      <h1 className="text-5xl font-bold text-black mb-2">
        {item.title}
      </h1>

      {/* Country */}
      <p className="text-base text-gray-700 mb-6">
        {item.country}
      </p>

      <hr className="border-[#dcdcdc] mb-6" />

      {/* Description */}
      <p className="text-gray-700 leading-relaxed text-sm">
        {item.description}
      </p>
    </div>

    {/* Button */}
    <div className="mt-8">
      <Link href="/partners/apply">
        <button className="px-6 py-3 rounded-xl border border-[#cfd4d8] text-[#1f3a5f] font-semibold hover:bg-gray-100 transition">
          Become a Partner
        </button>
      </Link>
    </div>
  </div>
))}

        </div>
      </section>
    </>
  );
}
