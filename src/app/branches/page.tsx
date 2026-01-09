import Ribbon from "@/components/Ribbon";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const branches = [
  {
    id: 1,
    title: "Dubai",
    date: "04 Feb 2013",
    description:
      "The Dubai branch of SRIYOG Consulting serves as our Middle East hub, delivering enterprise IT solutions, cloud services, and digital transformation strategies tailored for fast-growing regional businesses.",
    service: ["Website", "Cloud Solutions", "Business eMail"],
    path: "https://www.sriyog.com",
  },
  {
    id: 2,
    title: "Sydney",
    date: "13 Sep 2007",
    description:
      "Our Sydney branch supports clients across Australia with modern web development, IT consulting, and scalable digital infrastructure designed to meet global compliance and performance standards.",
    service: ["Website", "IT Consulting", "Business eMail"],
    path: "https://www.sriyog.com",
  },
  {
    id: 3,
    title: "Moscow",
    date: "04 Aug 2013",
    description:
      "The Moscow branch focuses on enterprise software solutions, system integrations, and secure IT operations, helping organizations modernize and streamline their digital ecosystems.",
    service: ["Enterprise Software", "Business eMail"],
    path: "https://www.sriyog.com",
  },
  {
    id: 7,
    title: "New Delhi",
    date: "04 Feb 2013",
    description:
      "SRIYOG Consulting’s New Delhi branch delivers technology consulting, academic systems, and digital platforms, supporting institutions and businesses across India with reliable IT services.",
    service: ["Website", "Business eMail", "IT Consulting"],
    path: "https://www.sriyog.com",
  },
  {
    id: 8,
    title: "Hyderabad",
    date: "04 Feb 2013",
    description:
      "The Hyderabad branch specializes in healthcare IT solutions, secure data systems, and web platforms, helping organizations improve operational efficiency through technology.",
    service: ["Website", "Business eMail", "IT Support"],
    path: "https://www.sriyog.com",
  },
  {
    id: 9,
    title: "Bangalore",
    date: "04 Feb 2013",
    description:
      "Our Bangalore branch acts as a technology and innovation center, delivering software development, cloud services, and digital transformation solutions for startups and enterprises.",
    service: ["Software Development", "Cloud Services", "Business eMail"],
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
      <Ribbon name="Our Global Branches" des="" />
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
              key={idx + 1}
              className="relative text-gray-700 shadow-[0_.5rem_1rem_rgba(0,0,0,.15)] rounded-lg px-4 pb-5 h-auto  hover:shadow-lg transition duration-300 ease-in-out"
            >
              <section className="flex items-center justify-center h-48 md:h-32 w-full mb-2 border-b border-[#dbdbdb]">
                <h1 className="text-5xl text-gray-700">{item.title}</h1>
              </section>
              <p className=" mb-2 md:h-24 h-32 ">
                {item.description.slice(0, 160)}...
              </p>
              {/* <p className="border-b pb-2 border-[#dbdbdb]">
                Service Started Date : {item.date}
              </p> */}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
