"use client";

import React, { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Image from "next/image";
import Ribbon from "@/components/Ribbon";

export default function Certificate() {
  const name = "Certificates";

  useEffect(() => {
    document.title = "Certificates | SRIYOG Consulting";
  }, []);

  const images = [
    { img: "/assets/images/certificate/1.jpg", name: "Company Registration", id: 1 },
    { img: "/assets/images/certificate/2.jpg", name: "PAN Registration", id: 2 },
    { img: "/assets/images/certificate/3.jpg", name: "Letter from Company Registration", id: 3 },
    { img: "/assets/images/certificate/4.jpg", name: "SRIYOG Prabandhapatra", id: 4 },
    { img :"/assets/images/certificate/16.jpg", name: "Address update",id: 16},
    { img: "/assets/images/certificate/5.jpg", name: "SRIYOG Niyamabali", id: 5 },
    { img: "/assets/images/certificate/6.jpg", name: "Letter from Ministry of Labour", id: 6 },
    { img: "/assets/images/certificate/7.jpg", name: "Letter from Ministry of Education", id: 7 },
    { img: "/assets/images/certificate/8.jpg", name: "EVENT-II Data", id: 8 },
    { img: "/assets/images/certificate/9.jpg", name: "ICT Startup & Innovation Mela, 2019", id: 9 },
    { img: "/assets/images/certificate/10.jpg", name: "IndiaSoft Global 2020 Participation", id: 10 },
    { img: "/assets/images/certificate/11.jpg", name: "Magic Footwear", id: 11 },
    { img: "/assets/images/certificate/12.jpg", name: "Arogya Bhawan Works", id: 12 },
    { img: "/assets/images/certificate/13.jpg", name: "Dr. Sudhir Khanal", id: 13 },
    { img: "/assets/images/certificate/14.jpg", name: "Dr. Biju Thapalia", id: 14 },
    { img: "/assets/images/certificate/15.jpg", name: "FNCCI Koshi", id: 15 },
  ];

  const [index, setIndex] = useState(-1);

  return (
    <>
      <Ribbon name={name} des="" />

      <section className="lg:w-[1180px] max-lg:container max-lg:px-3 mx-auto my-[68px] grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {images.map((item, idx) => (
          <div key={item.id} className="border border-[#dbdbdb] p-3 rounded-lg">
            <div className="relative w-full h-[300px] cursor-pointer">
              <Image
                src={item.img}
                alt={item.name || `Certificate ${item.id}`}
                fill
                className="object-contain rounded shadow-md"
                onClick={() => setIndex(idx)}
              />
            </div>
            <p className="mt-2 font-medium text-[#4b4b4b] text-sm">{item.name}</p>
          </div>
        ))}
      </section>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((img) => ({ src: img.img }))}
        plugins={[Thumbnails]}
      />
    </>
  );
}
