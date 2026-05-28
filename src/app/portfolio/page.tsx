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
        url: "https://sriyog.com/og/default.jpg",
        alt: "Portfolio"
      }
    ]
  }
}
export default function PortfolioPage() {
  const portfolio = [
    {
      id: 1,
      image: "/portfolio/gardensewa.jpg",
      title: "Garden Sewa",
      path: "https://gardensewa.com/",
    },
    {
      id: 2,
      image: "/portfolio/transnepaldryport.jpg",
      title: "Trans Nepal Dry Port",
      path: "https://transnepaldryport.com/",
    },
    {
      id: 3,
      image: "/portfolio/bkmasala.jpg",
      title: "BKM Masala",
      path: "https://bkmasala.com.np/",
    },
    {
      id: 4,
      image: "/portfolio/neuroHospital.jpg",
      title: "Neuro Hospital",
      path: "https://www.neurohospital.com.np/",
    },
    {
      id: 5,
      image: "/portfolio/kopilaclinic.jpg",
      title: "Kopila Clinic",
      path: "https://kopilaclinic.com.np/",
    },

    {
      id: 6,
      image: "/portfolio/drpriyankasclinic.jpg",
      title: "Dr. Priyanka’s Clinic",
      path:"https://drpriyankasclinic.com/"
    },

    {
      id: 7,
      image: "/portfolio/gravurelink.jpg",
      title: "Gravure Link",
      path:"https://gravelink.com.np/"
    },

    {
      id: 8,
      image: "/portfolio/painclinic.jpg",
      title: "Pain Clinic",
      path:'https://painclinic.com.np/'
    },

    {
      id: 9,
      image: "/portfolio/cvdsnepal.jpg",
      title: "CVDS Nepal",
      path:"https://cvdsnepal.org.np/"
    },
        {
      id: 10,
      image: "/portfolio/biratinfo.jpg",
      title: "Birat Info",
      path:"https://www.biratinfo.com/"
    },
            {
      id: 11,
      image: "/portfolio/sriyogapp.jpg",
      title: "SRIYOG App",
      path:"https://sriyog.com/app"
    },
            {
      id: 12,
      image: "/portfolio/cleaningsewa.jpg",
      title: "Cleaning Sewa",
      path:"https://cleaningsewa.com/"
    },
            {
      id: 13,
      image: "/portfolio/oshoashram.jpg",
      title: "OSHO Ashram",
      path:"https://oshoashram.org.np/"
    },
            {
      id: 14,
      image: "/portfolio/sanskarsewa.jpg",
      title: "Sanskar Sewa",
      path:"https://sanskarsewa.com/"
    },
            {
      id: 15,
      image: "/portfolio/tacklespro.jpg",
      title: "Tackles PRO",
      path:"https://tackles.pro/"
    },
            {
      id: 16,
      image: "/portfolio/pusom.jpg",
      title: "PUSOM",
      path:"https://pusom.edu.np/"
    },
            {
      id: 17,
      image: "/portfolio/nepalmotor.jpg",
      title: "Nepal Motor",
      path:"https://nepalmotor.com/"
    },
                {
      id: 18,
      image: "/portfolio/singhengineeringworks.jpg",
      title: "Singh Engineering Works",
      path:"http://singhengineeringworks.com.np/"
    },
                    {
      id: 19,
      image: "/portfolio/sudarshanagroresort.jpg",
      title: "Sudarshan Agro Resort",
      path:"https://sudarshanagroresort.com.np/"
    },
                    {
      id: 20,
      image: "/portfolio/sudarshansecurity.jpg",
      title: "Sudarshan Security Services",
      path:"https://sudarshansecurity.com.np/"
    },
                    {
      id: 21,
      image: "/portfolio/krishnaganga.jpg",
      title: "Krishna Ganga HOPE TRUST.",
      path:"https://krishnaganga.org.np/"
    },
                   {
      id: 22,
      image: "/portfolio/ncpd.jpg",
      title: "NCPD Nepal",
      path:"https://ncpd.org.np/"
    },

    {
      id: 23,
      image: "/portfolio/lpm.jpg",
      title: "LPM Nepal",
      path:"https://lpm.org.np/"
    },

    

    {
      id: 23,
      image: "/portfolio/shramsansar.jpg",
      title: "Shram Sansar",
      path:"https://shramsansar.com/"
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
