import React from "react";
import Image from "next/image";
import Ribbon from "@/components/Ribbon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download JDR Fonts | SRIYOG Consulting",
  description: "Download JDR Fonts for your projects from SRIYOG Consulting.",
  openGraph: {
    title: "Download JDR Fonts | SRIYOG Consulting",
    description: "Download JDR Fonts for your projects from SRIYOG Consulting.",
    url: "https://www.sriyog.com/fonts",
    images: [
      {
        url: "https://sriyog.com/og/default.jpg",
        alt: "Download JDR Fonts"
      }
    ]
  }
};

const Fonts = () => {
  const card = [
    {
      name: "JDR Amrit",
      image: "/fonts/jdr-amrit.JPG",
      link: "/download-fonts/JDR-AMRIT.ttf",
    },
    {
      name: "JDR Amrit 2",
      image: "/fonts/jdr-amrit-2.jpg",
      link: "/download-fonts/JDR-Amrit2.ttf",
    },
    {
      name: "JDR Amrit 4",
      image: "/fonts/jdr-amrit-4.jpg",
      link: "/download-fonts/JDR-Amrit4.ttf",
    },
    {
      name: "JDR Bagmati",
      image: "/fonts/jdr-bagmati.jpg",
      link: "/download-fonts/JDR-Bagmati.ttf",
    },
    {
      name: "JDR Bindukshar 1",
      image: "/fonts/jdr-binduakshar.jpg",
      link: "/download-fonts/JDR-Bindukshar-1.ttf",
    },
    {
      name: "JDR Birendra",
      image: "/fonts/jdr-birendra.jpg",
      link: "/download-fonts/JDR-Birendra.ttf",
    },
    {
      name: "JDR Dharahara",
      image: "/fonts/jdr-dharahara.jpg",
      link: "/download-fonts/JDR-Dharahara.ttf",
    },
    {
      name: "JDR Harka Bunma",
      image: "/fonts/jdr-harka-bunma.JPG",
      link: "/download-fonts/JDR-Harka-Bunma.ttf",
    },
    {
      name: "JDR Janakpur",
      image: "/fonts/jdr-janakpur.jpg",
      link: "/download-fonts/JDR-Janakpur.ttf",
    },
    {
      name: "JDR Koshi",
      image: "/fonts/jdr-koshi.jpg",
      link: "/download-fonts/JDR-Koshi.ttf",
    },
    {
      name: "JDR Lumbini",
      image: "/fonts/jdr-lumbini.jpg",
      link: "/download-fonts/JDR-Lumbini.ttf",
    },
    {
      name: "JDR Mahalaxmi",
      image: "/fonts/jdr-mahalaxmi.jpg",
      link: "/download-fonts/JDR-Mahalaxmi.ttf",
    },
    {
      name: "JDR Mechi",
      image: "/fonts/jdr-mechi.jpg",
      link: "/download-fonts/JDR-Mechi.ttf",
    },
    {
      name: "JDR Pracas",
      image: "/fonts/jdr-pracas.jpg",
      link: "/download-fonts/JDR-Pracas.ttf",
    },
    {
      name: "JDR Province 1",
      image: "/fonts/jdr-province-1.jpg",
      link: "/download-fonts/JDR-Province-1.ttf",
    },
    {
      name: "JDR Province 2",
      image: "/fonts/jdr-province-2.jpg",
      link: "/download-fonts/JDR-Province-2.ttf",
    },
    {
      name: "JDR Province 3",
      image: "/fonts/jdr-province-3.jpg",
      link: "/download-fonts/JDR-Province-3.ttf",
    },
    {
      name: "JDR Province 4",
      image: "/fonts/jdr-province-4.jpg",
      link: "/download-fonts/JDR-Province-4.ttf",
    },
    {
      name: "JDR Province 5",
      image: "/fonts/jdr-province-5.jpg",
      link: "/download-fonts/JDR-Province-5.ttf",
    },
    {
      name: "JDR Province 6",
      image: "/fonts/jdr-province-6.jpg",
      link: "/download-fonts/JDR-Province-6.ttf",
    },
    {
      name: "JDR Province 7",
      image: "/fonts/jdr-province-7.jpg",
      link: "/download-fonts/JDR-Province-7.ttf",
    },
    {
      name: "JDR Purwanchal",
      image: "/fonts/jdr-purwanchal.JPG",
      link: "/download-fonts/JDR-Purwanchal.ttf",
    },
    {
      name: "JDR Puspakshar",
      image: "/fonts/jdr-puspakshar.JPG",
      link: "/download-fonts/JDR-Puspakshar-1.ttf",
    },
    {
      name: "JDR Sagarmatha",
      image: "/fonts/jdr-sagarmatha.JPG",
      link: "/download-fonts/JDR-Sagarmatha.ttf",
    },
    {
      name: "Pracas",
      image: "/fonts/pracas.JPG",
      link: "/download-fonts/Pracas.ttf",
    },
    {
      name: "Download All Fonts",
      image: "/fonts/24.png",
      link: "/download-fonts/jdr-fonts.zip",
    },
  ];
  const name="Download JDR Fonts"
  return (
    <>
    <Ribbon name={name} des={""}/>
      <section className="lg:w-[1180px] max-lg:container max-lg:px-3 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 mb-[56px]">
        {card.map((item, idx) => (
          <div
            key={idx}
            className=" hover:-translate-y-4 transition duration-500 ease-in-out py-[55px] text-center shadow-[0_.5rem_1rem_rgba(0,0,0,.15)]  rounded-md"
          >
            <div className="relative mb-4 h-[180px] w-full">
              <Image
                src={item.image}
                alt={item.name}
                className="object-cover"
                fill
              />
            </div>
            <p className="mb-[25px] font-semibold text-[#333] text-[1.4rem]">
              {item.name}
            </p>
            <a
              href={item.link}
              className="border-[1.5px] text-[#4b4b4b] hover:bg-[#055d59] hover:text-white px-5 py-3 rounded-md font-semibold transition-all duration-300 ease-in-out"
            >
              Download Font
            </a>
          </div>
        ))}
      </section>
    </>
  );
};

export default Fonts;
