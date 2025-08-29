import Ribbon from "@/components/Ribbon";
import Image from "next/image";
import Link from "next/link";

import { Metadata } from "next";

export const metadata:Metadata={
  title:"Portfolio | SRIYOG Consulting",
  description: "Explore the portfolio of SRIYOG Consulting.",
  openGraph: {
    title: "Portfolio | SRIYOG Consulting",
    description: "Explore the portfolio of SRIYOG Consulting.",
    url: "https://www.sriyog.com/portfolio",
    images: [
      {
        url: "https://sriyog.com/assets/images/og/default.jpg",
        alt: "Portfolio"
      }
    ]
  }
}
export default function PortfolioPage() {
  const portfolio = [
    {
      id: 1,
      image: "/assets/images/portfolio/kisanpedia.png",
      title: "Kisanpedia Services",
      path: "https://kisanpedia.com/",
    },
    {
      id: 2,
      image: "/assets/images/portfolio/transNepal.png",
      title: "Trans Nepal Dry Port",
      path: "https://transnepaldryport.com/",
    },
    {
      id: 3,
      image: "/assets/images/portfolio/bkmMasala.png",
      title: "BKM Masala",
      path: "https://bkmasala.com.np/",
    },
    {
      id: 4,
      image: "/assets/images/portfolio/neuroHospital.png",
      title: "Neuro Hospital",
      path: "https://www.neurohospital.com.np/",
    },
    {
      id: 5,
      image: "/assets/images/portfolio/kopilaclinic.png",
      title: "Kopila Clinic",
      path: "https://kopilaclinic.com.np/",
    },

    {
      id: 6,
      image: "/assets/images/portfolio/drpriyanka.png",
      title: "Dr. Priyanka’s Clinic",
      path:"https://drpriyankasclinic.com/"
    },

    {
      id: 7,
      image: "/assets/images/portfolio/gravelink.png",
      title: "Gravure Link",
      path:"https://gravelink.com.np/"
    },

    {
      id: 8,
      image: "/assets/images/portfolio/painclinic.png",
      title: "Pain Clinic",
      path:'https://painclinic.com.np/'
    },

    {
      id: 9,
      image: "/assets/images/portfolio/cvdsnepal.png",
      title: "CVDS Nepal",
      path:"https://cvdsnepal.org.np/"
    },
        {
      id: 10,
      image: "/assets/images/portfolio/biratinfo.png",
      title: "Birat Info",
      path:"https://www.biratinfo.com/"
    },
            {
      id: 11,
      image: "/assets/images/portfolio/1.png",
      title: "SRIYOG App",
      path:"https://sriyog.app/"
    },
            {
      id: 12,
      image: "/assets/images/portfolio/2.png",
      title: "Prabidhi",
      path:"https://pracasinfosys.com/"
    },
            {
      id: 13,
      image: "/assets/images/portfolio/3.png",
      title: "SNG Solution",
      path:"https://sngsolution.com/"
    },
            {
      id: 14,
      image: "/assets/images/portfolio/4.png",
      title: "Lumanti Group",
      path:"https://lumantigroup.com/"
    },
            {
      id: 15,
      image: "/assets/images/portfolio/5.png",
      title: "Tackles Technicals",
      path:"https://tackles.pro/"
    },
            {
      id: 16,
      image: "/assets/images/portfolio/6.png",
      title: "PUSOM",
      path:"https://pusom.edu.np/"
    },
            {
      id: 17,
      image: "/assets/images/portfolio/7.png",
      title: "Bastoka Consulting",
      path:"https://baskotaconsulting.com.np/"
    },
                {
      id: 18,
      image: "/assets/images/portfolio/8.png",
      title: "Singh Engineering Works",
      path:"http://singhengineeringworks.com.np/"
    },
                    {
      id: 19,
      image: "/assets/images/portfolio/9.png",
      title: "Sudarshan Agro Resort",
      path:"https://sudarshanagroresort.com.np/"
    },
                    {
      id: 20,
      image: "/assets/images/portfolio/10.png",
      title: "Sudarshan Security Services",
      path:"https://sudarshansecurity.com.np/"
    },
                    {
      id: 21,
      image: "/assets/images/portfolio/11.png",
      title: "Krishna Ganga HOPE TRUST.",
      path:"https://krishnaganga.org.np/"
    },
  ];

   
  return (
    <>
    <Ribbon name="Portfolio" des=""/>
    <section className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-0 mb-[45px] mt-[45px] w-full flex flex-wrap gap-4 justify-center sm:justify-between">
  {portfolio.map((item) => (
    <div
      key={item.id}
      className="w-full sm:w-[316px] h-auto sm:h-[300px] flex flex-col gap-1 mb-6"
    >
      <Image
        src={item.image}
        width={400}
        height={400}
        alt={item.title}
        className="w-full rounded-[15px] h-[300px] sm:h-full object-cover"
      />
      <h1 className="text-center my-2">{item.title}</h1>
      <Link
      href={item.path}
      target="_blank"
      rel="noopener noreferrer"
      className="px-2 py-1 border border-[#055D59] text-md text-[#055D59] hover:bg-[#055D59] hover:text-white w-[50%] sm:w-[50%] mx-auto text-center rounded-lg transition-all ease-in duration-[100]"
    >
      Browse More
    </Link>

    </div>
  ))}
</section>
    </>
  );
}
