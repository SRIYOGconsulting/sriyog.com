import Ribbon from "@/components/Ribbon";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google slides | SRIYOG Consulting",
};

export default function Slides() {
  const portfolio = [
    {
      id: 1,
      title: "BIRATINFO - An Intro",
      image: "/assets/images/slide/biratinfo.png",
      path: "https://docs.google.com/presentation/d/1BGGyPusJSPIc1rwmqqDeT6f33Ne3S3xL9eZvtrYv82A/",
    },
    {
      id: 2,
      title: "Digital Literacy",
      image: "/assets/images/slide/digital.png",
      path: "https://docs.google.com/presentation/d/1_3BZyF6_xJ1N36Oz_wrktdJhJGYZJ77vuO5mtv9qlso/edit?usp=sharing",
    },
    {
      id: 3,
      title: "Cyber Security",
      image: "/assets/images/slide/cyber.png",
      path: "https://docs.google.com/presentation/d/1bSA3tCwOYk2XSHr8dYdddOcUCsmvlnIW6Qf93Pu4Cew/edit?usp=sharing",
    },
    {
      id: 4,
      title: "Social Media Marketing",
      image: "/assets/images/slide/social.png",
      path: "https://docs.google.com/presentation/d/1S0de1z_R_0ck08h3ETFlQeRk5c-SGMCGSHOzKsiQSd0/edit?usp=sharing",
    },
    {
      id: 5,
      title: "SRIYOG Concept Note",
      image: "/assets/images/slide/sriyog.png",
      path: "https://docs.google.com/presentation/d/1SmlhrAF3oniK8A_HdVe9pmh6u4ezXs7zsDNEVeTdxMk/edit?usp=sharing",
    },
    {
      id: 6,
      title: "#TechFriday - Professional UI/UX",
      image: "/assets/images/slide/uiux.png",
      path: "https://docs.google.com/presentation/d/1v0CmwcqmrM7N4LOind06-qUH6H5r5jLxzhc4_hlE6nc/edit?usp=sharing",
    },
    {
      id: 7,
      title: "SRIYOG Consulting",
      image: "/assets/images/slide/consulting.png",
      path: "https://docs.google.com/presentation/d/1B0ngzfRQ0hLrfmr_P2WyIGIabEY5Z-ZPyC-4syQFjRM/edit?usp=sharing",
    },
    {
      id: 8,
      title: "SRIYOG | Shark Tank Pitching",
      image: "/assets/images/slide/sharktank.png",
      path: "https://docs.google.com/presentation/d/1wN5_V3ZE14TuBbg3E2L1NFK1I4I-7pbGQGUdyrWT0_8/edit?usp=sharing",
    },
    {
      id:9,
      title: "Next.js - #TechFriday",
      image: "/assets/images/slide/nextjs.png",
      path: "https://docs.google.com/presentation/d/1KEYHWsUkPuYfzrBygAdUL2_S4S_UZWRmrVjutgsz5WI/edit?usp=sharing",
    }
  ];

  return (
    <>
      <Ribbon name="Google slide" des="" />
      <section className="max-w-[1180px] mx-auto px-6 lg:px-0 mb-[45px] mt-[45px] w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portfolio.map((item) => (
          <div
  key={item.id}
  className="w-full flex flex-col gap-1"
>
  <div className="relative w-full h-[350px] sm:h-[250px] rounded-[15px] overflow-hidden border border-[#055D59]">
    <Image
      src={item.image}
      alt={item.title}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
      className="object-cover sm:object-contain rounded-[15px]"
    />
  </div>
  <h1 className="text-center my-2 text-base font-medium">
    {item.title}
  </h1>
  <Link
    href={item.path}
    target="_blank"
    className=" px-1 sm:px-4 py-2 border border-[#055D59] text-[#055D59] hover:bg-[#055D59] hover:text-white w-[30%] sm:w-[40%] mx-auto text-center rounded-lg transition-all ease-in duration-100 text-sm"
  >
    View slides
  </Link>
</div>

          ))}
        </div>
      </section>
    </>
  );
}